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
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"2d31ac36-33fd-4534-b2f2-cdfe57a19f52\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2d31ac36-33fd-4534-b2f2-cdfe57a19f52"',
  'x-ms-request-id': 'cbe3c6bb-15b1-4246-8466-f8577cd664d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': 'f01029d1-ab06-437c-b271-fc2bf906ab33',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114214Z:f01029d1-ab06-437c-b271-fc2bf906ab33',
  date: 'Wed, 22 Jul 2015 11:42:13 GMT',
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
  'x-ms-request-id': 'cbe3c6bb-15b1-4246-8466-f8577cd664d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': 'f01029d1-ab06-437c-b271-fc2bf906ab33',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114214Z:f01029d1-ab06-437c-b271-fc2bf906ab33',
  date: 'Wed, 22 Jul 2015 11:42:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/07d00d6c-cdc2-44c2-99ea-3b0dfe7db050?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '07d00d6c-cdc2-44c2-99ea-3b0dfe7db050',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/07d00d6c-cdc2-44c2-99ea-3b0dfe7db050?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': 'c95eb623-e3d4-4a20-9dd2-291bf6545d63',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114217Z:c95eb623-e3d4-4a20-9dd2-291bf6545d63',
  date: 'Wed, 22 Jul 2015 11:42:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/07d00d6c-cdc2-44c2-99ea-3b0dfe7db050?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '07d00d6c-cdc2-44c2-99ea-3b0dfe7db050',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/07d00d6c-cdc2-44c2-99ea-3b0dfe7db050?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': 'c95eb623-e3d4-4a20-9dd2-291bf6545d63',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114217Z:c95eb623-e3d4-4a20-9dd2-291bf6545d63',
  date: 'Wed, 22 Jul 2015 11:42:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/07d00d6c-cdc2-44c2-99ea-3b0dfe7db050?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '357b8644-439f-497a-aea2-4a105397c09c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '15adaa8a-95df-47a5-807e-8246fc094800',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114230Z:15adaa8a-95df-47a5-807e-8246fc094800',
  date: 'Wed, 22 Jul 2015 11:42:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/07d00d6c-cdc2-44c2-99ea-3b0dfe7db050?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '357b8644-439f-497a-aea2-4a105397c09c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '15adaa8a-95df-47a5-807e-8246fc094800',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150722T114230Z:15adaa8a-95df-47a5-807e-8246fc094800',
  date: 'Wed, 22 Jul 2015 11:42:29 GMT',
  connection: 'close' });
 return result; }]];