// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Models extends APIResource {
  /**
   * Start a model fine-tuning job
   *
   * @example
   * ```ts
   * const response = await client.ai.models.fineTune({
   *   base_model: 'string',
   *   training_data_url:
   *     'https://fgRQbaa.xzHcF9eJWsyxZpyarGqAtgLrTkrZLieO9.lci,0ZyHZQmFAsw2uXx+Gu1',
   *   hyperparameters: {},
   * });
   * ```
   */
  fineTune(body: ModelFineTuneParams, options?: RequestOptions): APIPromise<ModelFineTuneResponse> {
    return this._client.post('/ai/models/fine-tune', { body, ...options });
  }

  /**
   * List supported AI model versions
   *
   * @example
   * ```ts
   * const response = await client.ai.models.retrieveVersions();
   * ```
   */
  retrieveVersions(options?: RequestOptions): APIPromise<ModelRetrieveVersionsResponse> {
    return this._client.get('/ai/models/versions', options);
  }
}

export interface ModelFineTuneResponse {
  job_id?: string;
}

export interface ModelRetrieveVersionsResponse {
  models?: Array<ModelRetrieveVersionsResponse.Model>;
}

export namespace ModelRetrieveVersionsResponse {
  export interface Model {
    modelId: string;

    version: string;
  }
}

export interface ModelFineTuneParams {
  base_model: string;

  training_data_url: string;

  hyperparameters?: unknown;
}

export declare namespace Models {
  export {
    type ModelFineTuneResponse as ModelFineTuneResponse,
    type ModelRetrieveVersionsResponse as ModelRetrieveVersionsResponse,
    type ModelFineTuneParams as ModelFineTuneParams,
  };
}
