// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"a0865f61-afba-4838-8404-000d996358d8\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '444',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a0865f61-afba-4838-8404-000d996358d8"',
  'x-ms-request-id': '32943826-68f8-40eb-a74c-185329af9ae3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd8f34704-b0f8-4072-949d-0e334e7a8c3e',
  'x-ms-routing-request-id': 'WESTEUROPE:20171130T084419Z:d8f34704-b0f8-4072-949d-0e334e7a8c3e',
  date: 'Thu, 30 Nov 2017 08:44:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"a0865f61-afba-4838-8404-000d996358d8\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '444',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a0865f61-afba-4838-8404-000d996358d8"',
  'x-ms-request-id': '32943826-68f8-40eb-a74c-185329af9ae3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'd8f34704-b0f8-4072-949d-0e334e7a8c3e',
  'x-ms-routing-request-id': 'WESTEUROPE:20171130T084419Z:d8f34704-b0f8-4072-949d-0e334e7a8c3e',
  date: 'Thu, 30 Nov 2017 08:44:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/networkWatchers/networkWatcherName/topology?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"id\": \"3e1b957b-5f94-4dab-95a8-b01feee95c1b\",\r\n  \"createdDateTime\": \"2017-11-30T08:44:19.8633322Z\",\r\n  \"lastModified\": \"2017-11-30T08:43:41.8720751Z\",\r\n  \"resources\": [\r\n    {\r\n      \"name\": \"virtualNetworkName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n      \"location\": \"westcentralus\",\r\n      \"associations\": [\r\n        {\r\n          \"name\": \"subnetName\",\r\n          \"resourceId\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n          \"associationType\": \"Contains\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"subnetName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n      \"location\": \"westcentralus\",\r\n      \"associations\": []\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1094',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/c2711067-a97b-4499-b1eb-19cec1711f71?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': 'c2711067-a97b-4499-b1eb-19cec1711f71',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/c2711067-a97b-4499-b1eb-19cec1711f71?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'f3f0d916-56d9-41d0-9227-1c50846e5ca2',
  'x-ms-routing-request-id': 'WESTEUROPE:20171130T084420Z:f3f0d916-56d9-41d0-9227-1c50846e5ca2',
  date: 'Thu, 30 Nov 2017 08:44:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/networkWatchers/networkWatcherName/topology?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"id\": \"3e1b957b-5f94-4dab-95a8-b01feee95c1b\",\r\n  \"createdDateTime\": \"2017-11-30T08:44:19.8633322Z\",\r\n  \"lastModified\": \"2017-11-30T08:43:41.8720751Z\",\r\n  \"resources\": [\r\n    {\r\n      \"name\": \"virtualNetworkName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n      \"location\": \"westcentralus\",\r\n      \"associations\": [\r\n        {\r\n          \"name\": \"subnetName\",\r\n          \"resourceId\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n          \"associationType\": \"Contains\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"subnetName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-network-watcher-custom/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n      \"location\": \"westcentralus\",\r\n      \"associations\": []\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1094',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/c2711067-a97b-4499-b1eb-19cec1711f71?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': 'c2711067-a97b-4499-b1eb-19cec1711f71',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/c2711067-a97b-4499-b1eb-19cec1711f71?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'f3f0d916-56d9-41d0-9227-1c50846e5ca2',
  'x-ms-routing-request-id': 'WESTEUROPE:20171130T084420Z:f3f0d916-56d9-41d0-9227-1c50846e5ca2',
  date: 'Thu, 30 Nov 2017 08:44:19 GMT',
  connection: 'close' });
 return result; }]];
