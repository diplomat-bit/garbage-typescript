// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Garbage from 'garbage';

const client = new Garbage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audits', () => {
  // Prism tests are disabled
  test.skip('requestAudit: only required params', async () => {
    const responsePromise = client.corporate.compliance.audits.requestAudit({
      auditScope: 'string',
      endDate: '2018-06-28',
      startDate: '2006-12-17',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('requestAudit: required and optional params', async () => {
    const response = await client.corporate.compliance.audits.requestAudit({
      auditScope: 'string',
      endDate: '2018-06-28',
      startDate: '2006-12-17',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveReport', async () => {
    const responsePromise = client.corporate.compliance.audits.retrieveReport('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
