// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Garbage from 'garbage';

const client = new Garbage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource international', () => {
  // Prism tests are disabled
  test.skip('executeSepa: only required params', async () => {
    const responsePromise = client.payments.international.executeSepa({
      amount: 4090.998569865607,
      iban: 'string',
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
  test.skip('executeSepa: required and optional params', async () => {
    const response = await client.payments.international.executeSepa({
      amount: 4090.998569865607,
      iban: 'string',
    });
  });

  // Prism tests are disabled
  test.skip('executeSwift: only required params', async () => {
    const responsePromise = client.payments.international.executeSwift({
      amount: 981.8703637183601,
      bic: 'string',
      currency: 'string',
      iban: 'string',
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
  test.skip('executeSwift: required and optional params', async () => {
    const response = await client.payments.international.executeSwift({
      amount: 981.8703637183601,
      bic: 'string',
      currency: 'string',
      iban: 'string',
    });
  });

  // Prism tests are disabled
  test.skip('getStatus', async () => {
    const responsePromise = client.payments.international.getStatus('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
