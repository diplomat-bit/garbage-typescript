// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Garbage from 'garbage';

const client = new Garbage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource models', () => {
  // Mock server tests are disabled
  test.skip('fineTune: only required params', async () => {
    const responsePromise = client.ai.models.fineTune({
      base_model: 'string',
      training_data_url: 'https://fgRQbaa.xzHcF9eJWsyxZpyarGqAtgLrTkrZLieO9.lci,0ZyHZQmFAsw2uXx+Gu1',
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
  test.skip('fineTune: required and optional params', async () => {
    const response = await client.ai.models.fineTune({
      base_model: 'string',
      training_data_url: 'https://fgRQbaa.xzHcF9eJWsyxZpyarGqAtgLrTkrZLieO9.lci,0ZyHZQmFAsw2uXx+Gu1',
      hyperparameters: {},
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveVersions', async () => {
    const responsePromise = client.ai.models.retrieveVersions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
