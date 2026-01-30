// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Offers extends APIResource {
  /**
   * List AI-Targeted Loyalty Offers
   *
   * @example
   * ```ts
   * const response =
   *   await client.marketplace.offers.listOffers();
   * ```
   */
  listOffers(options?: RequestOptions): APIPromise<OfferListOffersResponse> {
    return this._client.get('/marketplace/offers', options);
  }

  /**
   * Redeem Marketplace Reward
   *
   * @example
   * ```ts
   * await client.marketplace.offers.redeemOffer('string');
   * ```
   */
  redeemOffer(offerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/marketplace/offers/${offerID}/redeem`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OfferListOffersResponse {
  data?: Array<unknown>;
}

export declare namespace Offers {
  export { type OfferListOffersResponse as OfferListOffersResponse };
}
