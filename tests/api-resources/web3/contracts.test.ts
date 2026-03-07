// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Garbage from 'garbage';

const client = new Garbage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracts', () => {
  // Mock server tests are disabled
  test.skip('deploy: only required params', async () => {
    const responsePromise = client.web3.contracts.deploy({
      abi: {},
      bytecode: 'string',
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
  test.skip('deploy: required and optional params', async () => {
    const response = await client.web3.contracts.deploy({
      abi: {},
      bytecode: 'string',
    });
  });
});
