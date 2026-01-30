// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Fx extends APIResource {
  /**
   * Book a Forward FX Deal
   *
   * @example
   * ```ts
   * await client.payments.fx.bookDeal({
   *   amount: 9860.991425096323,
   *   pair: 'string',
   *   valueDate: '1972-06-20',
   * });
   * ```
   */
  bookDeal(body: FxBookDealParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/fx/deals', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Execute Currency Conversion
   *
   * @example
   * ```ts
   * await client.payments.fx.executeConversion({
   *   amount: 7305.266093092808,
   *   from: 'string',
   *   to: 'string',
   * });
   * ```
   */
  executeConversion(body: FxExecuteConversionParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/fx/convert', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Market FX Rates
   *
   * @example
   * ```ts
   * const response = await client.payments.fx.getRates({
   *   pair: 'EURUSD',
   * });
   * ```
   */
  getRates(query: FxGetRatesParams, options?: RequestOptions): APIPromise<FxGetRatesResponse> {
    return this._client.get('/payments/fx/rates', { query, ...options });
  }
}

export interface FxGetRatesResponse {
  midRate?: number;

  timestamp?: string;
}

export interface FxBookDealParams {
  amount: number;

  pair: string;

  valueDate: string;
}

export interface FxExecuteConversionParams {
  amount: number;

  from: string;

  to: string;
}

export interface FxGetRatesParams {
  pair: string;
}

export declare namespace Fx {
  export {
    type FxGetRatesResponse as FxGetRatesResponse,
    type FxBookDealParams as FxBookDealParams,
    type FxExecuteConversionParams as FxExecuteConversionParams,
    type FxGetRatesParams as FxGetRatesParams,
  };
}
