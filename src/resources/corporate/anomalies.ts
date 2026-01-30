// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Anomalies extends APIResource {
  /**
   * List detected anomalies
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.anomalies.listDetected();
   * ```
   */
  listDetected(options?: RequestOptions): APIPromise<AnomalyListDetectedResponse> {
    return this._client.get('/corporate/anomalies', options);
  }

  /**
   * Update anomaly status
   *
   * @example
   * ```ts
   * await client.corporate.anomalies.updateStatus('string', {
   *   status: 'investigating',
   * });
   * ```
   */
  updateStatus(
    anomalyID: string,
    body: AnomalyUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/corporate/anomalies/${anomalyID}/status`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AnomalyListDetectedResponse {
  data?: Array<unknown>;
}

export interface AnomalyUpdateStatusParams {
  status: 'dismissed' | 'investigating' | 'resolved';
}

export declare namespace Anomalies {
  export {
    type AnomalyListDetectedResponse as AnomalyListDetectedResponse,
    type AnomalyUpdateStatusParams as AnomalyUpdateStatusParams,
  };
}
