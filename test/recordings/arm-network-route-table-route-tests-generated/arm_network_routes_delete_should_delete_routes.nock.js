// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"ff02204c-1faf-456b-907f-c3d1d9ca2cc7\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"11.0.0.0/8\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '384',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ff02204c-1faf-456b-907f-c3d1d9ca2cc7"',
  'x-ms-request-id': '7b317f3e-e06b-4220-9a68-7218ec7f6f4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '14923874-c9e9-4720-8901-5b9f29005154',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103605Z:14923874-c9e9-4720-8901-5b9f29005154',
  date: 'Wed, 27 Sep 2017 10:36:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"ff02204c-1faf-456b-907f-c3d1d9ca2cc7\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"11.0.0.0/8\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '384',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ff02204c-1faf-456b-907f-c3d1d9ca2cc7"',
  'x-ms-request-id': '7b317f3e-e06b-4220-9a68-7218ec7f6f4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '14923874-c9e9-4720-8901-5b9f29005154',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103605Z:14923874-c9e9-4720-8901-5b9f29005154',
  date: 'Wed, 27 Sep 2017 10:36:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/02372652-1839-4df5-9428-9d39f521c9a8?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '02372652-1839-4df5-9428-9d39f521c9a8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/02372652-1839-4df5-9428-9d39f521c9a8?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '07e55ed6-e00b-4651-bcf5-a9e45a029cf1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103606Z:07e55ed6-e00b-4651-bcf5-a9e45a029cf1',
  date: 'Wed, 27 Sep 2017 10:36:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-10-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/02372652-1839-4df5-9428-9d39f521c9a8?api-version=2017-10-01',
  'retry-after': '10',
  'x-ms-request-id': '02372652-1839-4df5-9428-9d39f521c9a8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/02372652-1839-4df5-9428-9d39f521c9a8?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '07e55ed6-e00b-4651-bcf5-a9e45a029cf1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103606Z:07e55ed6-e00b-4651-bcf5-a9e45a029cf1',
  date: 'Wed, 27 Sep 2017 10:36:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/02372652-1839-4df5-9428-9d39f521c9a8?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2f4e3acc-5e07-4faa-8364-6fe3e9bc24ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '66a71c7a-7b3b-4553-98c2-406b7c6249f6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103637Z:66a71c7a-7b3b-4553-98c2-406b7c6249f6',
  date: 'Wed, 27 Sep 2017 10:36:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/02372652-1839-4df5-9428-9d39f521c9a8?api-version=2017-10-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2f4e3acc-5e07-4faa-8364-6fe3e9bc24ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '66a71c7a-7b3b-4553-98c2-406b7c6249f6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103637Z:66a71c7a-7b3b-4553-98c2-406b7c6249f6',
  date: 'Wed, 27 Sep 2017 10:36:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '262',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cf3791e6-abf2-4e3d-b07b-7227eb285006',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'ffb81787-d0fc-41e2-b387-3573753e531c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103638Z:ffb81787-d0fc-41e2-b387-3573753e531c',
  date: 'Wed, 27 Sep 2017 10:36:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '262',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cf3791e6-abf2-4e3d-b07b-7227eb285006',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'ffb81787-d0fc-41e2-b387-3573753e531c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103638Z:ffb81787-d0fc-41e2-b387-3573753e531c',
  date: 'Wed, 27 Sep 2017 10:36:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes?api-version=2017-10-01')
  .reply(200, "{\r\n  \"value\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '27affc3d-ff78-42cf-9bbe-e067c23d139f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2d42ceed-8dbc-4a94-af5e-cdf31eca49f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103639Z:2d42ceed-8dbc-4a94-af5e-cdf31eca49f0',
  date: 'Wed, 27 Sep 2017 10:36:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes?api-version=2017-10-01')
  .reply(200, "{\r\n  \"value\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '27affc3d-ff78-42cf-9bbe-e067c23d139f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2d42ceed-8dbc-4a94-af5e-cdf31eca49f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T103639Z:2d42ceed-8dbc-4a94-af5e-cdf31eca49f0',
  date: 'Wed, 27 Sep 2017 10:36:39 GMT',
  connection: 'close' });
 return result; }]];
