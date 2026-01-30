// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Insights extends APIResource {
  /**
   * Get Cash Flow Prediction (Gemini Powered)
   *
   * @example
   * ```ts
   * const response =
   *   await client.transactions.insights.getCashFlowPrediction();
   * ```
   */
  getCashFlowPrediction(options?: RequestOptions): APIPromise<InsightGetCashFlowPredictionResponse> {
    return this._client.get('/transactions/insights/future-flow', options);
  }

  /**
   * Get AISpending Trend Analysis
   *
   * @example
   * ```ts
   * const response =
   *   await client.transactions.insights.getSpendingTrends();
   * ```
   */
  getSpendingTrends(options?: RequestOptions): APIPromise<InsightGetSpendingTrendsResponse> {
    return this._client.get('/transactions/insights/spending-trends', options);
  }
}

export interface InsightGetCashFlowPredictionResponse {
  forecastDays?: number;

  projectedLowPoint?: number;

  recommendations?: Array<string>;
}

export interface InsightGetSpendingTrendsResponse {
  aiNarrative?: string;

  anomaliesDetected?: number;

  overallTrend?: string;
}

export declare namespace Insights {
  export {
    type InsightGetCashFlowPredictionResponse as InsightGetCashFlowPredictionResponse,
    type InsightGetSpendingTrendsResponse as InsightGetSpendingTrendsResponse,
  };
}
