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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"applicationSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\",\r\n  \"etag\": \"W/\\\"94398f5c-52de-43a8-8008-28549ef1dd30\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationSecurityGroups\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '456',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"94398f5c-52de-43a8-8008-28549ef1dd30"',
  'x-ms-request-id': '1ed81e28-bfb7-42e6-98c8-bbd7c57d6e40',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '71ea1a9d-ae31-4bc0-9ce9-cf8fc08cb52f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T071803Z:71ea1a9d-ae31-4bc0-9ce9-cf8fc08cb52f',
  date: 'Wed, 27 Sep 2017 07:18:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"applicationSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\",\r\n  \"etag\": \"W/\\\"94398f5c-52de-43a8-8008-28549ef1dd30\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationSecurityGroups\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '456',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"94398f5c-52de-43a8-8008-28549ef1dd30"',
  'x-ms-request-id': '1ed81e28-bfb7-42e6-98c8-bbd7c57d6e40',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '71ea1a9d-ae31-4bc0-9ce9-cf8fc08cb52f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T071803Z:71ea1a9d-ae31-4bc0-9ce9-cf8fc08cb52f',
  date: 'Wed, 27 Sep 2017 07:18:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"name\": \"applicationSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\",\r\n  \"etag\": \"W/\\\"94398f5c-52de-43a8-8008-28549ef1dd30\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationSecurityGroups\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '456',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '56816ba2-3bd4-4167-8fa9-be0e5546ac24',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/56816ba2-3bd4-4167-8fa9-be0e5546ac24?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '1d2d4f16-84eb-4b3f-bec6-62fee8e8b3e6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T071804Z:1d2d4f16-84eb-4b3f-bec6-62fee8e8b3e6',
  date: 'Wed, 27 Sep 2017 07:18:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName?api-version=2017-10-01', '*')
  .reply(200, "{\r\n  \"name\": \"applicationSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\",\r\n  \"etag\": \"W/\\\"94398f5c-52de-43a8-8008-28549ef1dd30\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationSecurityGroups\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '456',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '56816ba2-3bd4-4167-8fa9-be0e5546ac24',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/56816ba2-3bd4-4167-8fa9-be0e5546ac24?api-version=2017-10-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '1d2d4f16-84eb-4b3f-bec6-62fee8e8b3e6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T071804Z:1d2d4f16-84eb-4b3f-bec6-62fee8e8b3e6',
  date: 'Wed, 27 Sep 2017 07:18:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"applicationSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\",\r\n  \"etag\": \"W/\\\"94398f5c-52de-43a8-8008-28549ef1dd30\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationSecurityGroups\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '456',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"94398f5c-52de-43a8-8008-28549ef1dd30"',
  'x-ms-request-id': '0b728d3f-9782-4f4b-aaac-b2ca45e5ae4d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '364c4363-b0bb-4ee0-9616-88d5b56637be',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T071805Z:364c4363-b0bb-4ee0-9616-88d5b56637be',
  date: 'Wed, 27 Sep 2017 07:18:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"applicationSecurityGroupName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-application-security-group/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\",\r\n  \"etag\": \"W/\\\"94398f5c-52de-43a8-8008-28549ef1dd30\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationSecurityGroups\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '456',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"94398f5c-52de-43a8-8008-28549ef1dd30"',
  'x-ms-request-id': '0b728d3f-9782-4f4b-aaac-b2ca45e5ae4d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '364c4363-b0bb-4ee0-9616-88d5b56637be',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T071805Z:364c4363-b0bb-4ee0-9616-88d5b56637be',
  date: 'Wed, 27 Sep 2017 07:18:04 GMT',
  connection: 'close' });
 return result; }]];
