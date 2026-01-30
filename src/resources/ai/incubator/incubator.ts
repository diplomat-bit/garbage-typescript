// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalysisAPI from './analysis';
import {
  Analysis,
  AnalysisCompetitorsParams,
  AnalysisCompetitorsResponse,
  AnalysisSwotParams,
  AnalysisSwotResponse,
} from './analysis';
import * as PitchAPI from './pitch';
import {
  Pitch,
  PitchCreateParams,
  PitchCreateResponse,
  PitchRetrieveDetailsResponse,
  PitchUpdateFeedbackParams,
} from './pitch';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Incubator extends APIResource {
  pitch: PitchAPI.Pitch = new PitchAPI.Pitch(this._client);
  analysis: AnalysisAPI.Analysis = new AnalysisAPI.Analysis(this._client);

  /**
   * List All User Business Pitches
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.incubator.retrievePitches();
   * ```
   */
  retrievePitches(options?: RequestOptions): APIPromise<IncubatorRetrievePitchesResponse> {
    return this._client.get('/ai/incubator/pitches', options);
  }

  /**
   * Rapid Idea Validation Engine
   *
   * @example
   * ```ts
   * const response = await client.ai.incubator.validate({
   *   concept: 'string',
   * });
   * ```
   */
  validate(body: IncubatorValidateParams, options?: RequestOptions): APIPromise<IncubatorValidateResponse> {
    return this._client.post('/ai/incubator/validate', { body, ...options });
  }
}

export interface IncubatorRetrievePitchesResponse {
  data?: Array<unknown>;
}

export interface IncubatorValidateResponse {
  criticalFlaws?: Array<string>;

  feasibilityScore?: number;
}

export interface IncubatorValidateParams {
  concept: string;
}

Incubator.Pitch = Pitch;
Incubator.Analysis = Analysis;

export declare namespace Incubator {
  export {
    type IncubatorRetrievePitchesResponse as IncubatorRetrievePitchesResponse,
    type IncubatorValidateResponse as IncubatorValidateResponse,
    type IncubatorValidateParams as IncubatorValidateParams,
  };

  export {
    Pitch as Pitch,
    type PitchCreateResponse as PitchCreateResponse,
    type PitchRetrieveDetailsResponse as PitchRetrieveDetailsResponse,
    type PitchCreateParams as PitchCreateParams,
    type PitchUpdateFeedbackParams as PitchUpdateFeedbackParams,
  };

  export {
    Analysis as Analysis,
    type AnalysisCompetitorsResponse as AnalysisCompetitorsResponse,
    type AnalysisSwotResponse as AnalysisSwotResponse,
    type AnalysisCompetitorsParams as AnalysisCompetitorsParams,
    type AnalysisSwotParams as AnalysisSwotParams,
  };
}
