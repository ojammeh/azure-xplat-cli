// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    registeredProviders: ['sqlserver', 'website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.129 (rd_rdfe_stable.140922-1311) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '4d6c33584d851ce9a352e8d390be21f9',
  date: 'Thu, 25 Sep 2014 09:49:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/operations/4d6c33584d851ce9a352e8d390be21f9')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>4d6c3358-4d85-1ce9-a352-e8d390be21f9</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.129 (rd_rdfe_stable.140922-1311) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '60137e8638f019d59140f8e70b1e28c8',
  date: 'Thu, 25 Sep 2014 09:50:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips')
  .reply(200, "<ReservedIPs xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ReservedIP><Name>clitestrip</Name><Address>23.101.198.146</Address><Id>3c41af72-02e8-4b0c-8375-80d339df5270</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>test1</Name><Address>23.100.35.5</Address><Id>a6a93072-8b1e-41f1-b850-a6d6506efeb4</Id><State>Created</State><Location>West US</Location></ReservedIP></ReservedIPs>", { 'cache-control': 'no-cache',
  'content-length': '473',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.129 (rd_rdfe_stable.140922-1311) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '4b1d0bc4d7661fdbb408af0d23a6b14d',
  date: 'Thu, 25 Sep 2014 09:50:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips')
  .reply(200, "<ReservedIPs xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ReservedIP><Name>clitestrip</Name><Address>23.101.198.146</Address><Id>3c41af72-02e8-4b0c-8375-80d339df5270</Id><State>Created</State><Location>West US</Location></ReservedIP><ReservedIP><Name>test1</Name><Address>23.100.35.5</Address><Id>a6a93072-8b1e-41f1-b850-a6d6506efeb4</Id><State>Created</State><Location>West US</Location></ReservedIP></ReservedIPs>", { 'cache-control': 'no-cache',
  'content-length': '473',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.129 (rd_rdfe_stable.140922-1311) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '8f42aa0cb93f1372a871b42c14c3663a',
  date: 'Thu, 25 Sep 2014 09:50:17 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/reservedips/clitestrip')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.129 (rd_rdfe_stable.140922-1311) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '7a63503b5152137dbdd2398aa0f47b1d',
  date: 'Thu, 25 Sep 2014 09:50:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/operations/7a63503b5152137dbdd2398aa0f47b1d')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>7a63503b-5152-137d-bdd2-398aa0f47b1d</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.129 (rd_rdfe_stable.140922-1311) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'f4eacce9768b1576b5e4d8a0ab732260',
  date: 'Thu, 25 Sep 2014 09:50:51 GMT' });
 return result; }]];