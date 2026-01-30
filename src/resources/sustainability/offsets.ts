// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Offsets extends APIResource {
  /**
   * Purchase Verified Carbon Credits
   *
   * @example
   * ```ts
   * await client.sustainability.offsets.purchaseCredits({
   *   projectId: 'string',
   *   tonnes: 5219.91816003216,
   *   paymentSourceId: 'string',
   * });
   * ```
   */
  purchaseCredits(body: OffsetPurchaseCreditsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/sustainability/offsets/purchase', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retire Carbon Credits (Permanent Offsetting)
   *
   * @example
   * ```ts
   * await client.sustainability.offsets.retireCredits({
   *   certificateId: 'string',
   * });
   * ```
   */
  retireCredits(body: OffsetRetireCreditsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/sustainability/offsets/retire', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OffsetPurchaseCreditsParams {
  projectId: string;

  tonnes: number;

  paymentSourceId?: string;
}

export interface OffsetRetireCreditsParams {
  certificateId: string;
}

export declare namespace Offsets {
  export {
    type OffsetPurchaseCreditsParams as OffsetPurchaseCreditsParams,
    type OffsetRetireCreditsParams as OffsetRetireCreditsParams,
  };
}
