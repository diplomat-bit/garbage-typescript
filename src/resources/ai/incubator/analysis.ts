// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Analysis extends APIResource {
  /**
   * Generate Automated Competitor Landscape
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.incubator.analysis.competitors({
   *     industry: 'string',
   *     niche: 'string',
   *   });
   * ```
   */
  competitors(
    body: AnalysisCompetitorsParams,
    options?: RequestOptions,
  ): APIPromise<AnalysisCompetitorsResponse> {
    return this._client.post('/ai/incubator/analysis/competitors', { body, ...options });
  }

  /**
   * Generate AI SWOT Analysis
   *
   * @example
   * ```ts
   * const response = await client.ai.incubator.analysis.swot({
   *   businessContext: 'string',
   * });
   * ```
   */
  swot(body: AnalysisSwotParams, options?: RequestOptions): APIPromise<AnalysisSwotResponse> {
    return this._client.post('/ai/incubator/analysis/swot', { body, ...options });
  }
}

export interface AnalysisCompetitorsResponse {
  competitors?: Array<unknown>;

  marketShareAnalysis?: string;
}

export interface AnalysisSwotResponse {
  strengths?: Array<string>;

  weaknesses?: Array<string>;
}

export interface AnalysisCompetitorsParams {
  industry: string;

  niche: string;
}

export interface AnalysisSwotParams {
  businessContext: string;
}

export declare namespace Analysis {
  export {
    type AnalysisCompetitorsResponse as AnalysisCompetitorsResponse,
    type AnalysisSwotResponse as AnalysisSwotResponse,
    type AnalysisCompetitorsParams as AnalysisCompetitorsParams,
    type AnalysisSwotParams as AnalysisSwotParams,
  };
}
