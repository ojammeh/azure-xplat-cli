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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/rulePriorityOverRangeName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/rulePriorityOverRangeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '304',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0cea6067-59d4-4ca9-bdbd-ee3a19500851',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '7d1045ef-5c07-4683-a0d4-4bff8eb3dcb8',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120111Z:7d1045ef-5c07-4683-a0d4-4bff8eb3dcb8',
  date: 'Thu, 05 Oct 2017 12:01:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/rulePriorityOverRangeName?api-version=2017-10-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/rulePriorityOverRangeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '304',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0cea6067-59d4-4ca9-bdbd-ee3a19500851',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '7d1045ef-5c07-4683-a0d4-4bff8eb3dcb8',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120111Z:7d1045ef-5c07-4683-a0d4-4bff8eb3dcb8',
  date: 'Thu, 05 Oct 2017 12:01:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/rulePriorityOverRangeName?api-version=2017-10-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleInvalidPriority\",\r\n    \"message\": \"Security rule has invalid Priority. Value provided: 4097 Allowed range 100-4096.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '186',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd110b107-f6bb-438c-a9c2-ec99d1e1e1fc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0bc42c4c-1dbc-427f-bb40-71a0973ea5e1',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120112Z:0bc42c4c-1dbc-427f-bb40-71a0973ea5e1',
  date: 'Thu, 05 Oct 2017 12:01:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/rulePriorityOverRangeName?api-version=2017-10-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleInvalidPriority\",\r\n    \"message\": \"Security rule has invalid Priority. Value provided: 4097 Allowed range 100-4096.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '186',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd110b107-f6bb-438c-a9c2-ec99d1e1e1fc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0bc42c4c-1dbc-427f-bb40-71a0973ea5e1',
  'x-ms-routing-request-id': 'WESTEUROPE:20171005T120112Z:0bc42c4c-1dbc-427f-bb40-71a0973ea5e1',
  date: 'Thu, 05 Oct 2017 12:01:12 GMT',
  connection: 'close' });
 return result; }]];
