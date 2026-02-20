// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Garbage from 'garbage';

const client = new Garbage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fraud', () => {
  // Mock server tests are disabled
  test.skip('analyzeTransaction: only required params', async () => {
    const responsePromise = client.corporate.risk.fraud.analyzeTransaction({ transactionId: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('analyzeTransaction: required and optional params', async () => {
    const response = await client.corporate.risk.fraud.analyzeTransaction({ transactionId: 'string' });
  });
});
