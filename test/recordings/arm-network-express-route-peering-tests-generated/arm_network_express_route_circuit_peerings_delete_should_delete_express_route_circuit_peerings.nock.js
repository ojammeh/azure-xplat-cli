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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"c6e5b05d-58b9-4d97-a558-28a2cd2d2b74\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 2,\r\n    \"primaryPeerAddressPrefix\": \"11.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"13.0.0.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 2,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '761',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7cb6113e-2fa6-4126-919d-27809764fbf9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '0c10b1e8-e2ad-49c1-b967-faca058fb95f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113117Z:0c10b1e8-e2ad-49c1-b967-faca058fb95f',
  date: 'Wed, 27 Sep 2017 11:31:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"AzurePublicPeering\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering\",\r\n  \"etag\": \"W/\\\"c6e5b05d-58b9-4d97-a558-28a2cd2d2b74\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringType\": \"AzurePublicPeering\",\r\n    \"azureASN\": 12076,\r\n    \"peerASN\": 2,\r\n    \"primaryPeerAddressPrefix\": \"11.0.0.0/30\",\r\n    \"secondaryPeerAddressPrefix\": \"13.0.0.0/30\",\r\n    \"primaryAzurePort\": \"INX-LON04-06GMR-CIS-3-PRI-A\",\r\n    \"secondaryAzurePort\": \"INX-LON04-06GMR-CIS-4-SEC-A\",\r\n    \"state\": \"Enabled\",\r\n    \"vlanId\": 2,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"lastModifiedBy\": \"Customer\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '761',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7cb6113e-2fa6-4126-919d-27809764fbf9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '0c10b1e8-e2ad-49c1-b967-faca058fb95f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113117Z:0c10b1e8-e2ad-49c1-b967-faca058fb95f',
  date: 'Wed, 27 Sep 2017 11:31:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operationResults/75d9ef72-0519-4f9d-bd5c-f8c108065253?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '75d9ef72-0519-4f9d-bd5c-f8c108065253',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/75d9ef72-0519-4f9d-bd5c-f8c108065253?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '251d5fb3-c091-4dfd-b9c9-bf8c52654b93',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113119Z:251d5fb3-c091-4dfd-b9c9-bf8c52654b93',
  date: 'Wed, 27 Sep 2017 11:31:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operationResults/75d9ef72-0519-4f9d-bd5c-f8c108065253?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '75d9ef72-0519-4f9d-bd5c-f8c108065253',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/75d9ef72-0519-4f9d-bd5c-f8c108065253?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '251d5fb3-c091-4dfd-b9c9-bf8c52654b93',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113119Z:251d5fb3-c091-4dfd-b9c9-bf8c52654b93',
  date: 'Wed, 27 Sep 2017 11:31:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/75d9ef72-0519-4f9d-bd5c-f8c108065253?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e1c8c4be-aa4f-4711-b0a4-8317ba614ec5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '3aecde0b-f7c9-4609-91ef-1bf9e0dc2d4f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113150Z:3aecde0b-f7c9-4609-91ef-1bf9e0dc2d4f',
  date: 'Wed, 27 Sep 2017 11:31:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/75d9ef72-0519-4f9d-bd5c-f8c108065253?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e1c8c4be-aa4f-4711-b0a4-8317ba614ec5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '3aecde0b-f7c9-4609-91ef-1bf9e0dc2d4f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113150Z:3aecde0b-f7c9-4609-91ef-1bf9e0dc2d4f',
  date: 'Wed, 27 Sep 2017 11:31:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/75d9ef72-0519-4f9d-bd5c-f8c108065253?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '167f06e3-eaa4-4ec7-9771-7490232cd3c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '3366feed-8936-471c-8230-cdf2971ec72a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113221Z:3366feed-8936-471c-8230-cdf2971ec72a',
  date: 'Wed, 27 Sep 2017 11:32:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/75d9ef72-0519-4f9d-bd5c-f8c108065253?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '167f06e3-eaa4-4ec7-9771-7490232cd3c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '3366feed-8936-471c-8230-cdf2971ec72a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113221Z:3366feed-8936-471c-8230-cdf2971ec72a',
  date: 'Wed, 27 Sep 2017 11:32:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/75d9ef72-0519-4f9d-bd5c-f8c108065253?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f9de24f7-4b10-4ca3-986a-4bbfaa0706ad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '02aeabbe-ac7a-4e4c-bc8e-05fe25e7e1b3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113252Z:02aeabbe-ac7a-4e4c-bc8e-05fe25e7e1b3',
  date: 'Wed, 27 Sep 2017 11:32:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/75d9ef72-0519-4f9d-bd5c-f8c108065253?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f9de24f7-4b10-4ca3-986a-4bbfaa0706ad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '02aeabbe-ac7a-4e4c-bc8e-05fe25e7e1b3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113252Z:02aeabbe-ac7a-4e4c-bc8e-05fe25e7e1b3',
  date: 'Wed, 27 Sep 2017 11:32:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '293',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '78a9396e-06b2-4f84-b11a-e9e76d54406d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'fd2e6410-1f48-42c2-be26-a951445651f7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113254Z:fd2e6410-1f48-42c2-be26-a951445651f7',
  date: 'Wed, 27 Sep 2017 11:32:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePublicPeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '293',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '78a9396e-06b2-4f84-b11a-e9e76d54406d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'fd2e6410-1f48-42c2-be26-a951445651f7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113254Z:fd2e6410-1f48-42c2-be26-a951445651f7',
  date: 'Wed, 27 Sep 2017 11:32:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings?api-version=2017-10-01')
  .reply(200, "{\r\n  \"value\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3ed449af-db86-4f77-bd19-537b5a45d913',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '5e6ca9a0-f3ea-4464-85af-43f439367019',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113255Z:5e6ca9a0-f3ea-4464-85af-43f439367019',
  date: 'Wed, 27 Sep 2017 11:32:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings?api-version=2017-10-01')
  .reply(200, "{\r\n  \"value\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3ed449af-db86-4f77-bd19-537b5a45d913',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '5e6ca9a0-f3ea-4464-85af-43f439367019',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T113255Z:5e6ca9a0-f3ea-4464-85af-43f439367019',
  date: 'Wed, 27 Sep 2017 11:32:55 GMT',
  connection: 'close' });
 return result; }]];
