// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Recurring extends APIResource {
  /**
   * Manually Create Recurring Schedule
   *
   * @example
   * ```ts
   * await client.transactions.recurring.create({
   *   amount: 2136.462018591201,
   *   category: 'string',
   *   frequency: 'string',
   * });
   * ```
   */
  create(body: RecurringCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/transactions/recurring', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List Detected Subscriptions
   *
   * @example
   * ```ts
   * const recurrings =
   *   await client.transactions.recurring.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<RecurringListResponse> {
    return this._client.get('/transactions/recurring', options);
  }

  /**
   * Cancel Recurring Payment Detection
   *
   * @example
   * ```ts
   * await client.transactions.recurring.cancel('string');
   * ```
   */
  cancel(recurringID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/transactions/recurring/${recurringID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RecurringListResponse {
  data?: Array<RecurringListResponse.Data>;
}

export namespace RecurringListResponse {
  export interface Data {
    id?: string;

    description?: string;

    frequency?: string;

    nextExpectedDate?: string;
  }
}

export interface RecurringCreateParams {
  amount: number;

  category: string;

  frequency: string;
}

export declare namespace Recurring {
  export {
    type RecurringListResponse as RecurringListResponse,
    type RecurringCreateParams as RecurringCreateParams,
  };
}
