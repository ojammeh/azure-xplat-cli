﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-express-route-authorization-tests-generated',
  groupName = 'xplat-test-authorization',
  location;
var index = 0;

var expressRouteCircuitAuthorizations = {
  authorizationKey: '@a85b@CD944C0D48DC',
  authorizationKeyNew: '219750e6@1509@4c33',
  name: 'expressRouteCircuitAuthorizationName'
};

expressRouteCircuitAuthorizations.expressRouteCircuitName = 'expressRouteCircuitName';

var expressRouteCircuit = {
  serviceProviderName: 'Interxion',
  peeringLocation: 'London',
  location: 'brazilsouth',
  name: 'expressRouteCircuitName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment, true);
      suite.isRecording = false;
      suite.setupSuite(function () {
        location = expressRouteCircuitAuthorizations.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        expressRouteCircuitAuthorizations.location = location;
        expressRouteCircuitAuthorizations.name = suite.isMocked ? expressRouteCircuitAuthorizations.name : suite.generateId(expressRouteCircuitAuthorizations.name, null);
        expressRouteCircuitAuthorizations.group = groupName;
        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network express-route circuit create -g {1} -n {name} --service-provider-name {serviceProviderName} --peering-location {peeringLocation} --location {location} --json'.formatArgs(expressRouteCircuit, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        } else {
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(testTimeout);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('express route circuit authorizations', function () {
      this.timeout(testTimeout);
      it('create should create express route circuit authorizations', function (done) {
        var cmd = 'network express-route authorization create -g {group} -n {name} --key {authorizationKey} --circuit-name {expressRouteCircuitName}'.formatArgs(expressRouteCircuitAuthorizations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display express route circuit authorizations details', function (done) {
        var cmd = 'network express-route authorization show -g {group} -n {name} --circuit-name {expressRouteCircuitName}'.formatArgs(expressRouteCircuitAuthorizations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update express route circuit authorizations', function (done) {
        var cmd = 'network express-route authorization set -g {group} -n {name} --key {authorizationKeyNew} --circuit-name {expressRouteCircuitName}'.formatArgs(expressRouteCircuitAuthorizations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('list should display all express route circuit authorizations in resource group', function (done) {
        var cmd = 'network express-route authorization list -g {group} --circuit-name {expressRouteCircuitName}'.formatArgs(expressRouteCircuitAuthorizations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete express route circuit authorizations', function (done) {
        var cmd = 'network express-route authorization delete -g {group} -n {name} --circuit-name {expressRouteCircuitName} --quiet'.formatArgs(expressRouteCircuitAuthorizations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network express-route authorization show -g {group} -n {name} --circuit-name {expressRouteCircuitName}'.formatArgs(expressRouteCircuitAuthorizations);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
    });
  });
});
