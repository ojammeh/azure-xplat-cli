//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

var __ = require('underscore');
var fs = require('fs');
var path = require('path');
var util = require('util');
var batchUtil = require('./batch.util');
var batchShowUtil = require('./batch.showUtil');
var storage = require('azure-storage');
var storageUtil = require('../../util/storage.util');
var utils = require('../../util/utils');
var startProgress = batchUtil.startProgress;
var endProgress = batchUtil.endProgress;
var jobClient = require('./batch.jobUtils');
var BlobConstants = storage.Constants.BlobConstants;
var SpeedSummary = storage.BlobService.SpeedSummary;
// var poolClient = require('batch.pool');

var $ = utils.getLocaleString;

/**
* Init batch ncj command
*/
exports.init = function (cli) {

  //Init batchUtil
  batchUtil.init(cli);
  storageUtil.init(cli);

  /**
  * Define batch ncj command usage
  */
  var batch = cli.category('batch');

  var ncj = batch.category('ncj').description($('Commands to manage your Batch NCJs'));

  var logger = cli.output;

  var interaction = cli.interaction;

  ncj.command('create [json-template] [json-parameters]')
    .description($('Adds a NCJ (No Code Job) to the specified account'))
    .option('-f, --json-template <json-template>', $('the file containing the NCJ object to create in JSON format; if this parameter is specified, all other ncj parameters are ignored.'))
    .option('-f, --json-parameters <json-parameters>', $('the file containing the NCJ parameters to pass into the template.'))
    .appendBatchAccountOption()
    .execute(createNcj);

  ncj.command('list')
    .description($('Lists all of the ncjs in the specified account'))
    .option('-i, --ncj-schedule-id [ncjScheduleId]', $('the id of the ncj schedule from which you want to get a list of ncjs'))
    .appendODataFilterOption(true, true, true)
    .appendBatchAccountOption()
    .execute(listNcjs);

  ncj.command('show [ncjId]')
    .description($('Show information about the specified ncj'))
    .option('-i, --id <ncjId>', $('the id of the ncj'))
    .appendODataFilterOption(true, false, true)
    .appendBatchAccountOption()
    .execute(showNcj);

  ncj.command('uploadFiles')
    .description($("Uploads files to storage to be used by a job"))
    .option('-f, --file <file>', $('the path to the file to upload'))
    .option('-d, --directory <directory>', $('the path to the directory of files to uplaod'))
    .option('-t, --json-template <json-template>', $('The file containing the NCJ object. Any referenced files will be uploaded.'))
	  .option('-e, --sas-expiry <sasExpiry>', $('length of time in hours before resource file SAS token expiry'))
	  //.option('-w, --update-json <>', $('If set, will output an updated NCJ json-template with local path sources replaced by SAS tokens'))
    .appendBatchAccountOption()
	  .appendStorageAccountOption()
    .execute(uploadFiles);

  ncj.command('test')
    .execute(test);

  /**
  * Implement batch ncj cli
  */

  function test() {
    console.log("Hello World!");
  }

  function uploadFiles(options, _) {
    if (options.file && options.directory) {
      logger.warn("Cannot specify both 'file' and 'directory'");
      return;
    }
    if (options.template && (options.file || options.directory)) {
        logger.warn("Cannot specify 'template' and either 'file' or 'directory'");
        return;
    }
    options.storageContainer = interaction.promptIfNotGiven($('Container: '), options.storageContainer, _);
    var connection = { accountName: options.storageAccount, accountKey: options.storageKey }
    var serviceClient = storageUtil.getServiceClient(storageUtil.getBlobService, connection);

    if (options.file) {
      _uploadBlob(options.file, options, serviceClient, _);
    }

    if (options.directory) {
      var fsStatus = fs.stat(options.directory, _);
      if (!fsStatus.isDirectory()) {
        throw new Error(util.format($('%s is not a valid directory'), options.directory));
      }
      logger.info("Upload all files in directory: " + options.directory);
      files = fs.readdir(options.directory, _);
      for (var i = 0; i < files.length; i++) {
        file = path.join(options.directory, files[i]);
        var fsStatus = fs.stat(file, _);
        if (!fsStatus.isDirectory()) {
          _uploadBlob(file, options, serviceClient, _);
        }
      }
    }
    return;
  }

  /**
  * Create a batch ncj
  * @param {string} [jsonTemplate] the file containing the ncj to create in JSON format
  * @param {string} [jsonProperties] the file containing the ncj to create in JSON format
  * @param {object} options command line options
  * @param {callback} _ callback function
  */
  function createNcj(jsonTemplate, jsonProperties, options, _) {
    if (!jsonTemplate) {
      jsonTemplate = options.jsonFile;
    }

    var properties = {};
    if (!jsonProperties) {
      throw new Error("INFO: No properties file was supplied.");
    }
    var parsedJson = {};
    var strJson = ""
    if (jsonTemplate) {
      strJson = fs.readFileSync(jsonTemplate).toString();
      parsedJson = JSON.parse(strJson);
    }

    var parsedParams = {};
    if (jsonProperties) {
      var objJson = fs.readFile(jsonProperties, _).toString();
      parsedParams = JSON.parse(objJson);
    }
    logger.info("Parsing JSON template and resolving parameters");
    parsedJson = jobClient.parseTemplate(strJson, parsedJson, parsedParams, logger, _);

    var ncjParsedApplications = parsedJson.resources.filter(function (x) { return x.type === "Microsoft.Batch/batchAccounts/softwares" });
    var ncjParsedPools = parsedJson.resources.filter(function (x) { return x.type === "Microsoft.Batch/batchAccounts/pools" });
    var ncjParsedJobs = parsedJson.resources.filter(function (x) { return x.type === "Microsoft.Batch/batchAccounts/NCJs" });
    for (var n = 0; n < ncjParsedJobs.length; n++) {
      var tasks = jobClient.parseTasks(ncjParsedJobs[n].properties.taskfactory, logger, _);
      logger.info(util.format("Finished parsing %s tasks", tasks.length));
    }

    //TODO: Actually set up an app package
    var startCmds = []
    if (ncjParsedApplications) {
        logger.info("Configuring applications")
        
        for (var i = 0; i < ncjParsedApplications.length; i++) {
            var app = ncjParsedApplications[i];
            var appId = app.name.split('/');
            appId = appId[appId.length - 1];
            for (var j = 0; j < app.resources.length; j++) {
                appPackage = app.resources[j]
                appVersion = appPackage.name;
                jobClient.deployAppPackage(appId, appVersion, logger, _)
                startCmds.push(appPackage.properties.installCmd);
            }
        }
    }
    //TODO: Should only build start task from applications referenced by pool
    var poolStartTaskCmd = startCmds.join(' & ');

    //TODO: Check for existing pools
    //TODO: Set ncj ID meta data on pools
    if (ncjParsedPools) {
        logger.info("Configuring pools");
        for (var i = 0; i < ncjParsedPools.length; i++) {
            var pool = ncjParsedPools[i];
            var poolId = pool.name.split('/');
            poolId = poolId[poolId.length - 1];
            jobClient.deployPool(poolId, pool.properties, poolStartTaskCmd, options, logger, _)
        }
    }


    // logger.verbose(util.format($('ncj %s has been created successfully'), addncj.id));
    // showncj(addncj.id, options, _);
  }

  /**
  * Show the details of the specified Batch ncj
  * @param {string} [ncjId] ncj id
  * @param {object} options command line options
  * @param {callback} _ callback function
  */
  function showNcj(ncjId, options, _) {
    var client = batchUtil.createBatchServiceClient(options);
    if (!ncjId) {
      ncjId = options.id;
    }
    ncjId = interaction.promptIfNotGiven($('ncj id: '), ncjId, _);
    var tips = $('Getting Batch ncj information');

    var batchOptions = {};
    batchOptions.ncjGetOptions = batchUtil.getBatchOperationDefaultOption();

    if (options.selectClause) {
      batchOptions.ncjGetOptions.select = options.selectClause;
    }
    if (options.expandClause) {
      batchOptions.ncjGetOptions.expand = options.expandClause;
    }

    var ncj = null;

    startProgress(tips);
    try {
      ncj = client.ncj.get(ncjId, batchOptions, _);
    } catch (e) {
      if (batchUtil.isNotFoundException(e)) {
        throw new Error(util.format($('ncj %s does not exist'), ncjId));
      } else {
        if (e.message) {
          if (typeof e.message === 'object') {
            e.message = e.message.value;
          }
        }

        throw e;
      }
    } finally {
      endProgress();
    }

    batchShowUtil.showCloudncj(ncj, cli.output);
  }

  /**
  * List batch ncjs
  * @param {object} options command line options
  * @param {callback} _ callback function
  */
  function listNcjs(options, _) {
    var client = batchUtil.createBatchServiceClient(options);
    var tips = $('Listing Batch ncjs');
    var batchOptions = {};

    var ncjOptions = batchUtil.getBatchOperationDefaultOption();
    if (options.selectClause) {
      ncjOptions.select = options.selectClause;
    }
    if (options.expandClause) {
      ncjOptions.expand = options.expandClause;
    }
    if (options.filterClause) {
      ncjOptions.filter = options.filterClause;
    }

    if (options.ncjScheduleId) {
      batchOptions.ncjListFromncjScheduleOptions = ncjOptions;
    } else {
      batchOptions.ncjListOptions = ncjOptions;
    }

    var ncjs = [];
    startProgress(tips);

    try {
      if (options.ncjScheduleId) {
        result = client.ncj.listFromncjSchedule(options.ncjScheduleId, batchOptions, _);
      } else {
        result = client.ncj.list(batchOptions, _);
      }
      result.forEach(function (ncj) {
        ncjs.push(ncj);
      });
      var nextLink = result.odatanextLink;

      while (nextLink) {
        batchOptions = {};
        ncjOptions = batchUtil.getBatchOperationDefaultOption();

        if (options.ncjScheduleId) {
          batchOptions.ncjListFromncjScheduleOptions = ncjOptions;
          result = client.ncj.listFromncjScheduleNext(nextLink, batchOptions, _);
        } else {
          batchOptions.ncjListOptions = ncjOptions;
          result = client.ncj.listNext(nextLink, batchOptions, _);
        }
        result.forEach(function (ncj) {
          ncjs.push(ncj);
        });
        nextLink = result.odatanextLink;
      }

    } catch (err) {
      if (err.message) {
        if (typeof err.message === 'object') {
          err.message = err.message.value;
        }
      }

      throw err;
    } finally {
      endProgress();
    }

    cli.interaction.formatOutput(ncjs, function (outputData) {
      if (outputData.length === 0) {
        logger.info($('No ncj found'));
      } else {
        logger.table(outputData, function (row, item) {
          row.cell($('Id'), item.id);
          row.cell($('State'), item.state);
        });
      }
    });
  }




  function _uploadBlob(file, options, blobService, _) {

    var specifiedContainerName = options.storageContainer;
    operation = storageUtil.getStorageOperation(blobService, storageUtil.OperationType.Blob, 'createContainerIfNotExists');
    storageUtil.performStorageOperation(operation, function (error) { if (error) { throw error; } }, specifiedContainerName);

    var specifiedFileName = file
    var specifiedBlobName = path.basename(specifiedFileName);
    var specifiedBlobType = BlobConstants.BlobTypes['BLOCK'];
    var storageOptions = storageUtil.getStorageOperationDefaultOption();
    storageOptions.parallelOperationThreadCount = storageUtil.threadsInOperation;

    storageOptions.storeBlobContentMD5 = true;

    var summary = new SpeedSummary(specifiedBlobName);
    storageOptions.speedSummary = summary;
    specifiedBlobName = storageUtil.convertFileNameToBlobName(specifiedBlobName);

    if (!utils.fileExists(specifiedFileName, _)) {
      throw new Error(util.format($('Local file %s doesn\'t exist'), specifiedFileName));
    }
    var fsStatus = fs.stat(specifiedFileName, _);
    if (!fsStatus.isFile()) {
      throw new Error(util.format($('%s is not a file'), specifiedFileName));
    }

    var sizeLimit = storageUtil.MaxBlockBlobSize;
    if (fsStatus.size > sizeLimit) {
      throw new Error(util.format($('The local file size %d exceeds the Azure blob size limit %d'), fsStatus.size, sizeLimit));
    }

    var tips = '';
    var blobProperties = null;
    try {
        tips = util.format($('Checking blob %s in container %s'), specifiedBlobName, specifiedContainerName);
        startProgress(tips);
        var propertiesOperation = storageUtil.getStorageOperation(blobService, storageUtil.OperationType.Blob, 'getBlobProperties');
        blobProperties = storageUtil.performStorageOperation(propertiesOperation, _,
          specifiedContainerName, specifiedBlobName, storageOptions);
    } catch (e) {
        if (!storageUtil.isNotFoundException(e)) {
            throw e;
        }
    } finally {
        endProgress();
    }

    if (!blobProperties || options.overwrite) {
        if (blobProperties && blobProperties.blobType !== specifiedBlobType) {
            throw new Error(util.format($('BlobType mismatch. The current blob type is %s'),
              blobProperties.blobType));
        }
        tips = util.format($('Uploading %s to blob %s in container %s'), specifiedFileName, specifiedBlobName, specifiedContainerName);
        var operation = storageUtil.getStorageOperation(blobService, storageUtil.OperationType.Blob, 'createBlockBlobFromLocalFile');
        storageOptions.parallelOperationThreadCount = storageOptions.parallelOperationThreadCount;
        var printer = storageUtil.getSpeedPrinter(summary);
        var intervalId = -1;
        if (!logger.format().json) {
          intervalId = setInterval(printer, 1000);
        }
        startProgress(tips);
        endProgress();
        try {
          //Upload block blob
          operation = storageUtil.getStorageOperation(blobService, storageUtil.OperationType.Blob, 'createBlockBlobFromLocalFile');
          storageUtil.performStorageOperation(operation, _, specifiedContainerName, specifiedBlobName, specifiedFileName, storageOptions);
        } catch (e) {
          printer(true);
          throw e;
        } finally {
          printer(true);
          clearInterval(intervalId);
        }
    } else {
      tips = util.format($('File %s already uploaded'), specifiedBlobName);
      startProgress(tips);
      endProgress();
    }
  }
};