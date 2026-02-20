// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Garbage from 'garbage';

const client = new Garbage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fx', () => {
  // Mock server tests are disabled
  test.skip('bookDeal: only required params', async () => {
    const responsePromise = client.payments.fx.bookDeal({
      amount: 9860.991425096323,
      pair: 'string',
      valueDate: '1972-06-20',
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
  test.skip('bookDeal: required and optional params', async () => {
    const response = await client.payments.fx.bookDeal({
      amount: 9860.991425096323,
      pair: 'string',
      valueDate: '1972-06-20',
    });
  });

  // Mock server tests are disabled
  test.skip('executeConversion: only required params', async () => {
    const responsePromise = client.payments.fx.executeConversion({
      amount: 7305.266093092808,
      from: 'string',
      to: 'string',
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
  test.skip('executeConversion: required and optional params', async () => {
    const response = await client.payments.fx.executeConversion({
      amount: 7305.266093092808,
      from: 'string',
      to: 'string',
    });
  });

  // Mock server tests are disabled
  test.skip('getRates: only required params', async () => {
    const responsePromise = client.payments.fx.getRates({ pair: 'EURUSD' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getRates: required and optional params', async () => {
    const response = await client.payments.fx.getRates({ pair: 'EURUSD' });
  });
});
