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

var testPrefix = 'arm-network-vnet-peering-tests-generated',
  groupName = 'xplat-test-peering',
  location;
var index = 0;

var virtualNetworkPeerings = {
  allowVirtualNetworkAccess: 'true',
  allowVirtualNetworkAccessNew: 'false',
  allowForwardedTraffic: 'true',
  allowForwardedTrafficNew: 'false',
  allowGatewayTransit: 'true',
  allowGatewayTransitNew: 'false',
  useRemoteGateways: 'false',
  name: 'virtualNetworkPeeringName'
};

virtualNetworkPeerings.virtualNetworkName = 'virtualNetworkName';
virtualNetworkPeerings.remoteNetworkName = 'remoteNetworkName';

var remoteNetwork = {
  location: 'westus',
  name: 'remoteNetworkName'
};

var virtualNetwork = {
  location: 'westus',
  name: 'virtualNetworkName'
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
        location = virtualNetworkPeerings.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        virtualNetworkPeerings.location = location;
        virtualNetworkPeerings.name = suite.isMocked ? virtualNetworkPeerings.name : suite.generateId(virtualNetworkPeerings.name, null);
        virtualNetworkPeerings.group = groupName;
        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n {name} --location {location} --json'.formatArgs(virtualNetwork, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var cmd = 'network vnet create -g {1} -n {name} --location {location} --address-prefixes 11.0.0.0/8 --json'.formatArgs(remoteNetwork, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var output = JSON.parse(result.text);
                virtualNetworkPeerings.remoteNetworkId = output.id;
                done();
              });
            });
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          virtualNetworkPeerings.remoteNetworkId = generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'remoteNetworks', virtualNetworkPeerings.remoteNetworkName);
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

    describe('virtual network peerings', function () {
      this.timeout(testTimeout);
      it('create should create virtual network peerings', function (done) {
        var cmd = 'network vnet peering create -g {group} -n {name} --allow-vnet-access {allowVirtualNetworkAccess} --allow-forwarded-traffic {allowForwardedTraffic} --allow-gateway-transit {allowGatewayTransit} --use-remote-gateways {useRemoteGateways} --vnet-name {virtualNetworkName} --remote-vnet-id {remoteNetworkId}'.formatArgs(virtualNetworkPeerings);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('show should display virtual network peerings details', function (done) {
        var cmd = 'network vnet peering show -g {group} -n {name} --vnet-name {virtualNetworkName}'.formatArgs(virtualNetworkPeerings);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('set should update virtual network peerings', function (done) {
        var cmd = 'network vnet peering set -g {group} -n {name} --allow-vnet-access {allowVirtualNetworkAccessNew} --allow-forwarded-traffic {allowForwardedTrafficNew} --allow-gateway-transit {allowGatewayTransitNew} --vnet-name {virtualNetworkName}'.formatArgs(virtualNetworkPeerings);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('list should display all virtual network peerings in resource group', function (done) {
        var cmd = 'network vnet peering list -g {group} --vnet-name {virtualNetworkName}'.formatArgs(virtualNetworkPeerings);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
      it('delete should delete virtual network peerings', function (done) {
        var cmd = 'network vnet peering delete -g {group} -n {name} --vnet-name {virtualNetworkName} --quiet'.formatArgs(virtualNetworkPeerings);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network vnet peering show -g {group} -n {name} --vnet-name {virtualNetworkName}'.formatArgs(virtualNetworkPeerings);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
    });
  });
});
