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

var testPrefix = 'arm-network-vpn-gateway-tests-generated',
  groupName = 'xplat-test-vpn-gateway',
  location;
var index = 0;

var virtualNetworkGateways = {
  gatewayType: 'Vpn',
  vpnType: 'RouteBased',
  enableBgp: 'true',
  enableBgpNew: 'false',
  activeActive: 'false',
  skuname: 'Standard',
  addressPrefixes: '15.0.0.0/8',
  asn: 65010,
  bgpPeeringAddress: '10.12.255.30',
  peerWeight: 0,
  location: 'westus',
  name: 'virtualNetworkGatewayName'
};

virtualNetworkGateways.virtualNetworkName = 'virtualNetworkName';
virtualNetworkGateways.subnetName = 'GatewaySubnet';
virtualNetworkGateways.publicIPAddressName = 'publicIPAddressName';
virtualNetworkGateways.localNetworkGatewayName = 'localNetworkGatewayName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  virtualNetworkName: 'virtualNetworkName',
  name: 'GatewaySubnet'
};

var virtualNetwork = {
  location: 'westus',
  name: 'virtualNetworkName'
};

var localNetworkGateway = {
  gatewayIpAddress: '10.0.0.42',
  location: 'westus',
  name: 'localNetworkGatewayName'
};

var publicIPAddress = {
  location: 'westus',
  name: 'publicIPAddressName'
};

var attachSiteUsingId = {
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'GatewaySubnet',
  publicIPAddressName: 'publicIPAddressName',
  localNetworkGatewayName: 'localNetworkGatewayName',
  name: 'attachSiteUsingIdName'
};

var detachSiteUsingId = {
  location: 'westus',
  localNetworkGatewayName: 'localNetworkGatewayName',
  name: 'attachSiteUsingIdName'
};

var attachSiteUsingName = {
  location: 'westus',
  localNetworkGatewayName: 'localNetworkGatewayName',
  name: 'attachSiteUsingIdName'
};

var detachSiteUsingName = {
  location: 'westus',
  localNetworkGatewayName: 'localNetworkGatewayName',
  name: 'attachSiteUsingIdName'
};

var gatewayTypeOutOfRange = {
  gatewayType: 'AnyValue',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'GatewaySubnet',
  publicIPAddressName: 'publicIPAddressName',
  name: 'gatewayTypeOutOfRangeName'
};

var vpnTypeOutOfRange = {
  vpnType: 'AnyRange',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'GatewaySubnet',
  publicIPAddressName: 'publicIPAddressName',
  name: 'vpnTypeOutOfRangeName'
};

var skuNameOutOfRange = {
  skuname: 'NoName',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'GatewaySubnet',
  publicIPAddressName: 'publicIPAddressName',
  name: 'skuNameOutOfRangeName'
};

var invalidPrefixes = {
  addressPrefixes: '10.0.0.0/50',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'GatewaySubnet',
  publicIPAddressName: 'publicIPAddressName',
  name: 'invalidPrefixesName'
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
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = virtualNetworkGateways.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        virtualNetworkGateways.location = location;
        virtualNetworkGateways.name = suite.isMocked ? virtualNetworkGateways.name : suite.generateId(virtualNetworkGateways.name, null);

        virtualNetworkGateways.group = groupName;
        attachSiteUsingId.group = groupName;
        detachSiteUsingId.group = groupName;
        attachSiteUsingName.group = groupName;
        detachSiteUsingName.group = groupName;
        gatewayTypeOutOfRange.group = groupName;
        vpnTypeOutOfRange.group = groupName;
        skuNameOutOfRange.group = groupName;
        invalidPrefixes.group = groupName;

        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n {name} --location {location} --json'.formatArgs(virtualNetwork, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var cmd = 'network vnet subnet create -g {1} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --json'.formatArgs(subnet, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var cmd = 'network public-ip create -g {1} -n {name} --location {location} --json'.formatArgs(publicIPAddress, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  var cmd = 'network local-gateway create -g {1} -n {name} --ip-address {gatewayIpAddress} --location {location} --json'.formatArgs(localNetworkGateway, groupName);
                  testUtils.executeCommand(suite, retry, cmd, function (result) {
                    result.exitStatus.should.equal(0);
                    var output = JSON.parse(result.text);
                    attachSiteUsingId.localNetworkGatewayId = output.id;
                    detachSiteUsingId.localNetworkGatewayId = output.id;
                    done();
                  });
                });
              });
            });
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          attachSiteUsingId.localNetworkGatewayId = generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'localNetworkGateways', attachSiteUsingId.localNetworkGatewayName);
          detachSiteUsingId.localNetworkGatewayId = generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'localNetworkGateways', detachSiteUsingId.localNetworkGatewayName);
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

    describe('virtual network gateways', function () {
      this.timeout(testTimeout);
      it('create should create virtual network gateways', function (done) {
        var cmd = 'network vpn-gateway create -g {group} -n {name} --gateway-type {gatewayType} --vpn-type {vpnType} --enable-bgp {enableBgp} --enable-active-active-feature {activeActive} --sku-name {skuname} --address-prefixes {addressPrefixes} --bgp-asn {asn} --bgp-peering-address {bgpPeeringAddress} --bgp-peer-weight {peerWeight} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(virtualNetworkGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(virtualNetworkGateways.name);
          output.gatewayType.toLowerCase().should.equal(virtualNetworkGateways.gatewayType.toLowerCase());
          output.vpnType.toLowerCase().should.equal(virtualNetworkGateways.vpnType.toLowerCase());
          output.enableBgp.should.equal(utils.parseBool(virtualNetworkGateways.enableBgp));
          output.activeActive.should.equal(utils.parseBool(virtualNetworkGateways.activeActive));
          output.sku.name.toLowerCase().should.equal(virtualNetworkGateways.skuname.toLowerCase());
          virtualNetworkGateways.addressPrefixes.split(',').forEach(function (item) { output.vpnClientConfiguration.vpnClientAddressPool.addressPrefixes.should.containEql(item) });
          output.bgpSettings.asn.should.equal(parseInt(virtualNetworkGateways.asn, 10));
          output.bgpSettings.bgpPeeringAddress.toLowerCase().should.equal(virtualNetworkGateways.bgpPeeringAddress.toLowerCase());
          done();
        });
      });
      it('show should display virtual network gateways details', function (done) {
        var cmd = 'network vpn-gateway show -g {group} -n {name} --json'.formatArgs(virtualNetworkGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(virtualNetworkGateways.name);
          output.gatewayType.toLowerCase().should.equal(virtualNetworkGateways.gatewayType.toLowerCase());
          output.vpnType.toLowerCase().should.equal(virtualNetworkGateways.vpnType.toLowerCase());
          output.enableBgp.should.equal(utils.parseBool(virtualNetworkGateways.enableBgp));
          output.activeActive.should.equal(utils.parseBool(virtualNetworkGateways.activeActive));
          output.sku.name.toLowerCase().should.equal(virtualNetworkGateways.skuname.toLowerCase());
          virtualNetworkGateways.addressPrefixes.split(',').forEach(function (item) { output.vpnClientConfiguration.vpnClientAddressPool.addressPrefixes.should.containEql(item) });
          output.bgpSettings.asn.should.equal(parseInt(virtualNetworkGateways.asn, 10));
          output.bgpSettings.bgpPeeringAddress.toLowerCase().should.equal(virtualNetworkGateways.bgpPeeringAddress.toLowerCase());
          done();
        });
      });
      it('set should update virtual network gateways', function (done) {
        var cmd = 'network vpn-gateway set -g {group} -n {name} --enable-bgp {enableBgpNew} --json'.formatArgs(virtualNetworkGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(virtualNetworkGateways.name);
          output.enableBgp.should.equal(utils.parseBool(virtualNetworkGateways.enableBgpNew));
          done();
        });
      });
      it('list should display all virtual network gateways in resource group', function (done) {
        var cmd = 'network vpn-gateway list -g {group} --json'.formatArgs(virtualNetworkGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === virtualNetworkGateways.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete virtual network gateways', function (done) {
        var cmd = 'network vpn-gateway delete -g {group} -n {name} --quiet --json'.formatArgs(virtualNetworkGateways);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network vpn-gateway show -g {group} -n {name} --json'.formatArgs(virtualNetworkGateways);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text || '{}');
            output.should.be.empty;
            done();
          });
        });
      });
      it('create should pass for attach site using id', function (done) {
        var cmd = 'network vpn-gateway create -g {group} -n {name} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(attachSiteUsingId);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(attachSiteUsingId.name);
          output.ipConfigurations[index].subnet.id.should.containEql(attachSiteUsingId.subnetName);
          output.ipConfigurations[index].publicIPAddress.id.should.containEql(attachSiteUsingId.publicIPAddressName);

          cmd = 'network vpn-gateway set -g {group} -n {name} --default-site-id {localNetworkGatewayId} --json'.formatArgs(attachSiteUsingId);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.name.should.equal(attachSiteUsingId.name);
            output.gatewayDefaultSite.id.should.equal(attachSiteUsingId.localNetworkGatewayId);
            done();
          });
        });
      });
      it('operation detach site using id should pass', function (done) {
        var cmd = 'network vpn-gateway set -g {group} -n {name} --default-site-id --json'.formatArgs(detachSiteUsingId);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(detachSiteUsingId.name);
          should.not.exist(output.gatewayDefaultSite);
          done();
        });
      });
      it('operation attach site using name should pass', function (done) {
        var cmd = 'network vpn-gateway set -g {group} -n {name} --default-site-name {localNetworkGatewayName} --json'.formatArgs(attachSiteUsingName);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(attachSiteUsingName.name);
          output.gatewayDefaultSite.id.should.containEql(attachSiteUsingName.localNetworkGatewayName);
          done();
        });
      });
      it('operation detach site using name should pass', function (done) {
        var cmd = 'network vpn-gateway set -g {group} -n {name} --default-site-name --json'.formatArgs(detachSiteUsingName);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(detachSiteUsingName.name);
          should.not.exist(output.gatewayDefaultSite);

          cmd = 'network vpn-gateway delete -g {group} -n {name} --quiet --json'.formatArgs(detachSiteUsingName);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            done();
          });
        });
      });
      it('create should fail for gateway type out of range', function (done) {
        var cmd = 'network vpn-gateway create -g {group} -n {name} --gateway-type {gatewayType} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(gatewayTypeOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for vpn type out of range', function (done) {
        var cmd = 'network vpn-gateway create -g {group} -n {name} --vpn-type {vpnType} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(vpnTypeOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for sku name out of range', function (done) {
        var cmd = 'network vpn-gateway create -g {group} -n {name} --sku-name {skuname} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(skuNameOutOfRange);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
      it('create should fail for invalid prefixes', function (done) {
        var cmd = 'network vpn-gateway create -g {group} -n {name} --address-prefixes {addressPrefixes} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --public-ip-name {publicIPAddressName} --json'.formatArgs(invalidPrefixes);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.not.equal(0);
          done();
        });
      });
    });
  });
});
