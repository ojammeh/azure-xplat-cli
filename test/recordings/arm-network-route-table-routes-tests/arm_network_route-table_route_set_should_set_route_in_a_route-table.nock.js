// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"5e6c2f8b-f21d-4e79-982a-d542e31a0e50\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5e6c2f8b-f21d-4e79-982a-d542e31a0e50"',
  'x-ms-request-id': '06856b32-b360-4cfb-9049-322281fa2076',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': '6fca5bcf-ad53-4534-aeb9-d943b4ccc72d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114148Z:6fca5bcf-ad53-4534-aeb9-d943b4ccc72d',
  date: 'Wed, 22 Jul 2015 11:41:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"5e6c2f8b-f21d-4e79-982a-d542e31a0e50\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5e6c2f8b-f21d-4e79-982a-d542e31a0e50"',
  'x-ms-request-id': '06856b32-b360-4cfb-9049-322281fa2076',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': '6fca5bcf-ad53-4534-aeb9-d943b4ccc72d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114148Z:6fca5bcf-ad53-4534-aeb9-d943b4ccc72d',
  date: 'Wed, 22 Jul 2015 11:41:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"028123c9-082c-45dd-938e-78af83d8c6b2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.1.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '385',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8ae87743-b0ad-477b-a027-46b61dd6fcf7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/8ae87743-b0ad-477b-a027-46b61dd6fcf7?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '07bde64f-034a-40e2-9665-8aae4fb961da',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114151Z:07bde64f-034a-40e2-9665-8aae4fb961da',
  date: 'Wed, 22 Jul 2015 11:41:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"028123c9-082c-45dd-938e-78af83d8c6b2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.1.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '385',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8ae87743-b0ad-477b-a027-46b61dd6fcf7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/8ae87743-b0ad-477b-a027-46b61dd6fcf7?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '07bde64f-034a-40e2-9665-8aae4fb961da',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114151Z:07bde64f-034a-40e2-9665-8aae4fb961da',
  date: 'Wed, 22 Jul 2015 11:41:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/8ae87743-b0ad-477b-a027-46b61dd6fcf7?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '497f403e-463a-435c-a293-bd4519719ea1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '0256c0d0-06ac-424c-86d2-f4d370fa8502',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114204Z:0256c0d0-06ac-424c-86d2-f4d370fa8502',
  date: 'Wed, 22 Jul 2015 11:42:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/8ae87743-b0ad-477b-a027-46b61dd6fcf7?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '497f403e-463a-435c-a293-bd4519719ea1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '0256c0d0-06ac-424c-86d2-f4d370fa8502',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114204Z:0256c0d0-06ac-424c-86d2-f4d370fa8502',
  date: 'Wed, 22 Jul 2015 11:42:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"2d31ac36-33fd-4534-b2f2-cdfe57a19f52\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2d31ac36-33fd-4534-b2f2-cdfe57a19f52"',
  'x-ms-request-id': 'f7a0ea8f-1c6b-4e05-b014-4aa1f198cc6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '9021af04-ced7-4e2e-8d23-884666a70396',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114206Z:9021af04-ced7-4e2e-8d23-884666a70396',
  date: 'Wed, 22 Jul 2015 11:42:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"2d31ac36-33fd-4534-b2f2-cdfe57a19f52\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2d31ac36-33fd-4534-b2f2-cdfe57a19f52"',
  'x-ms-request-id': 'f7a0ea8f-1c6b-4e05-b014-4aa1f198cc6c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '9021af04-ced7-4e2e-8d23-884666a70396',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114206Z:9021af04-ced7-4e2e-8d23-884666a70396',
  date: 'Wed, 22 Jul 2015 11:42:05 GMT',
  connection: 'close' });
 return result; }]];