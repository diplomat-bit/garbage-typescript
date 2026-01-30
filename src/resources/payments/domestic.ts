// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Domestic extends APIResource {
  /**
   * Execute ACH Transfer
   *
   * @example
   * ```ts
   * await client.payments.domestic.executeACH({
   *   account: 'string',
   *   amount: 9587.708408938319,
   *   routing: 'string',
   * });
   * ```
   */
  executeACH(body: DomesticExecuteACHParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/domestic/ach', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Real-time Payment (RTP)
   *
   * @example
   * ```ts
   * await client.payments.domestic.executeRtp({
   *   amount: 856.3350923839752,
   *   recipientId: 'string',
   * });
   * ```
   */
  executeRtp(body: DomesticExecuteRtpParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/domestic/rtp', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Execute Federal Wire
   *
   * @example
   * ```ts
   * await client.payments.domestic.executeWire({
   *   account: 'string',
   *   amount: 9587.708408938319,
   *   routing: 'string',
   * });
   * ```
   */
  executeWire(body: DomesticExecuteWireParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/payments/domestic/wire', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DomesticExecuteACHParams {
  account: string;

  amount: number;

  routing: string;
}

export interface DomesticExecuteRtpParams {
  amount: number;

  recipientId: string;
}

export interface DomesticExecuteWireParams {
  account: string;

  amount: number;

  routing: string;
}

export declare namespace Domestic {
  export {
    type DomesticExecuteACHParams as DomesticExecuteACHParams,
    type DomesticExecuteRtpParams as DomesticExecuteRtpParams,
    type DomesticExecuteWireParams as DomesticExecuteWireParams,
  };
}
