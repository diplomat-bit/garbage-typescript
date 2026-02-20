// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Garbage from 'garbage';

const client = new Garbage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource simulate', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.oracle.simulate.create({ prompt: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.ai.oracle.simulate.create({
      prompt: 'string',
      parameters: {},
    });
  });

  // Mock server tests are disabled
  test.skip('advanced: only required params', async () => {
    const responsePromise = client.ai.oracle.simulate.advanced({
      prompt: 'string',
      scenarios: [{ name: 'string' }, { name: 'string' }],
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
  test.skip('advanced: required and optional params', async () => {
    const response = await client.ai.oracle.simulate.advanced({
      prompt: 'string',
      scenarios: [
        { name: 'string', description: 'string' },
        { name: 'string', description: 'string' },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('monteCarlo: only required params', async () => {
    const responsePromise = client.ai.oracle.simulate.monteCarlo({
      iterations: 2896,
      variables: ['string', 'string'],
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
  test.skip('monteCarlo: required and optional params', async () => {
    const response = await client.ai.oracle.simulate.monteCarlo({
      iterations: 2896,
      variables: ['string', 'string'],
    });
  });
});
