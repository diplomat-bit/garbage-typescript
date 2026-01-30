// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Get Historical Ledger Archive
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.transactions.retrieveArchived(
   *     'string',
   *   );
   * ```
   */
  retrieveArchived(
    accountID: string,
    query: TransactionRetrieveArchivedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionRetrieveArchivedResponse> {
    return this._client.get(path`/accounts/${accountID}/transactions/archived`, { query, ...options });
  }

  /**
   * Get Pending Ledger Entries
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.transactions.retrievePending(
   *     'string',
   *   );
   * ```
   */
  retrievePending(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<TransactionRetrievePendingResponse> {
    return this._client.get(path`/accounts/${accountID}/transactions/pending`, options);
  }
}

export interface TransactionRetrieveArchivedResponse {
  value?: string;
}

export interface TransactionRetrievePendingResponse {
  value?: string;
}

export interface TransactionRetrieveArchivedParams {
  year?: number;
}

export declare namespace Transactions {
  export {
    type TransactionRetrieveArchivedResponse as TransactionRetrieveArchivedResponse,
    type TransactionRetrievePendingResponse as TransactionRetrievePendingResponse,
    type TransactionRetrieveArchivedParams as TransactionRetrieveArchivedParams,
  };
}
