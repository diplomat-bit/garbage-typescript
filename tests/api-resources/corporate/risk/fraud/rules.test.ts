// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Garbage from 'garbage';

const client = new Garbage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  // Mock server tests are disabled
  test.skip('createCustom: only required params', async () => {
    const responsePromise = client.corporate.risk.fraud.rules.createCustom({
      logic: {},
      name: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createCustom: required and optional params', async () => {
    const response = await client.corporate.risk.fraud.rules.createCustom({
      logic: {},
      name: 'string',
    });
  });

  // Mock server tests are disabled
  test.skip('listActive', async () => {
    const responsePromise = client.corporate.risk.fraud.rules.listActive();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateRule', async () => {
    const responsePromise = client.corporate.risk.fraud.rules.updateRule('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateRule: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.corporate.risk.fraud.rules.updateRule(
        'string',
        { action: 'string', name: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Garbage.NotFoundError);
  });
});
