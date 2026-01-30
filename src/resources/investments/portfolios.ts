// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Portfolios extends APIResource {
  /**
   * Create Strategic Portfolio
   *
   * @example
   * ```ts
   * await client.investments.portfolios.create({
   *   name: 'string',
   *   strategy: 'GROWTH',
   *   initialAllocation: {},
   * });
   * ```
   */
  create(body: PortfolioCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/investments/portfolios', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Full Portfolio Performance
   *
   * @example
   * ```ts
   * await client.investments.portfolios.retrieve('string');
   * ```
   */
  retrieve(portfolioID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/investments/portfolios/${portfolioID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update Portfolio Strategy
   *
   * @example
   * ```ts
   * await client.investments.portfolios.update('string', {
   *   riskTolerance: 9686,
   *   strategy: 'string',
   * });
   * ```
   */
  update(
    portfolioID: string,
    body: PortfolioUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/investments/portfolios/${portfolioID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List All Investment Portfolios
   *
   * @example
   * ```ts
   * const portfolios =
   *   await client.investments.portfolios.list();
   * ```
   */
  list(
    query: PortfolioListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PortfolioListResponse> {
    return this._client.get('/investments/portfolios', { query, ...options });
  }

  /**
   * Trigger Gemini AI Rebalancing
   *
   * @example
   * ```ts
   * const response =
   *   await client.investments.portfolios.rebalance('string', {
   *     executionMode: 'CONFIRM_ONLY',
   *   });
   * ```
   */
  rebalance(
    portfolioID: string,
    body: PortfolioRebalanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PortfolioRebalanceResponse> {
    return this._client.post(path`/investments/portfolios/${portfolioID}/rebalance`, { body, ...options });
  }
}

export interface PortfolioListResponse {
  data?: Array<PortfolioListResponse.Data>;
}

export namespace PortfolioListResponse {
  export interface Data {
    id?: string;

    name?: string;

    totalValue?: number;
  }
}

export interface PortfolioRebalanceResponse {
  impactSummary?: string;

  rebalanceId?: string;
}

export interface PortfolioCreateParams {
  name: string;

  strategy: 'GROWTH' | 'BALANCED' | 'INCOME' | 'ESG_FOCUSED';

  initialAllocation?: unknown;
}

export interface PortfolioUpdateParams {
  riskTolerance?: number;

  strategy?: string;
}

export interface PortfolioListParams {
  limit?: number;

  offset?: number;
}

export interface PortfolioRebalanceParams {
  executionMode?: 'AUTO' | 'CONFIRM_ONLY';
}

export declare namespace Portfolios {
  export {
    type PortfolioListResponse as PortfolioListResponse,
    type PortfolioRebalanceResponse as PortfolioRebalanceResponse,
    type PortfolioCreateParams as PortfolioCreateParams,
    type PortfolioUpdateParams as PortfolioUpdateParams,
    type PortfolioListParams as PortfolioListParams,
    type PortfolioRebalanceParams as PortfolioRebalanceParams,
  };
}
