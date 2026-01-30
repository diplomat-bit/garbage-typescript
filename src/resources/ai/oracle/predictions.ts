// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Predictions extends APIResource {
  /**
   * Get AI-Driven Inflation Forecast
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.oracle.predictions.retrieveInflation();
   * ```
   */
  retrieveInflation(
    query: PredictionRetrieveInflationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PredictionRetrieveInflationResponse> {
    return this._client.get('/ai/oracle/predictions/inflation', { query, ...options });
  }

  /**
   * Get Market Volatility & Crash Probability
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.oracle.predictions.retrieveMarketCrashProbability();
   * ```
   */
  retrieveMarketCrashProbability(
    options?: RequestOptions,
  ): APIPromise<PredictionRetrieveMarketCrashProbabilityResponse> {
    return this._client.get('/ai/oracle/predictions/market-crash-probability', options);
  }
}

export interface PredictionRetrieveInflationResponse {
  confidenceScore?: number;

  forecastedCPI?: number;

  period?: string;
}

export interface PredictionRetrieveMarketCrashProbabilityResponse {
  aiNarrative?: string;

  crashProbability?: number;

  riskFactors?: Array<string>;
}

export interface PredictionRetrieveInflationParams {
  region?: string;
}

export declare namespace Predictions {
  export {
    type PredictionRetrieveInflationResponse as PredictionRetrieveInflationResponse,
    type PredictionRetrieveMarketCrashProbabilityResponse as PredictionRetrieveMarketCrashProbabilityResponse,
    type PredictionRetrieveInflationParams as PredictionRetrieveInflationParams,
  };
}
