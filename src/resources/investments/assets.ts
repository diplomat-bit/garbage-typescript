// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Assets extends APIResource {
  /**
   * Global Multi-Asset Search (Equities, Crypto, ESG)
   *
   * @example
   * ```ts
   * const response = await client.investments.assets.search({
   *   query: 'query',
   * });
   * ```
   */
  search(query: AssetSearchParams, options?: RequestOptions): APIPromise<AssetSearchResponse> {
    return this._client.get('/investments/assets/search', { query, ...options });
  }
}

export interface AssetSearchResponse {
  hits?: Array<unknown>;
}

export interface AssetSearchParams {
  query: string;

  assetType?: 'EQUITY' | 'CRYPTO' | 'ETF' | 'BOND';
}

export declare namespace Assets {
  export { type AssetSearchResponse as AssetSearchResponse, type AssetSearchParams as AssetSearchParams };
}
