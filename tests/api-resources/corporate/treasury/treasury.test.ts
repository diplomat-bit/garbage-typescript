// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Garbage from 'garbage';

const client = new Garbage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource treasury', () => {
  // Mock server tests are disabled
  test.skip('executeBulkPayouts: only required params', async () => {
    const responsePromise = client.corporate.treasury.executeBulkPayouts({ payouts: [{}, {}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('executeBulkPayouts: required and optional params', async () => {
    const response = await client.corporate.treasury.executeBulkPayouts({
      payouts: [
        { amount: 5744.972374072148, recipient_id: 'string' },
        { amount: 4503.646628538282, recipient_id: 'string' },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('getLiquidityPositions', async () => {
    const responsePromise = client.corporate.treasury.getLiquidityPositions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
