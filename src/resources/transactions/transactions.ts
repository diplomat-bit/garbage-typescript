// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InsightsAPI from './insights';
import { InsightGetCashFlowPredictionResponse, InsightGetSpendingTrendsResponse, Insights } from './insights';
import * as RecurringAPI from './recurring';
import { Recurring, RecurringCreateParams, RecurringListResponse } from './recurring';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transactions extends APIResource {
  recurring: RecurringAPI.Recurring = new RecurringAPI.Recurring(this._client);
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);

  /**
   * Get Transaction Deep Metadata
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.retrieve(
   *   'string',
   * );
   * ```
   */
  retrieve(transactionID: string, options?: RequestOptions): APIPromise<TransactionRetrieveResponse> {
    return this._client.get(path`/transactions/${transactionID}`, options);
  }

  /**
   * Global Transaction Search & Filter
   *
   * @example
   * ```ts
   * const transactions = await client.transactions.list();
   * ```
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/transactions', { query, ...options });
  }

  /**
   * Attach Manual Notes to Transaction
   *
   * @example
   * ```ts
   * await client.transactions.addNotes('string', {
   *   notes: 'string',
   * });
   * ```
   */
  addNotes(
    transactionID: string,
    body: TransactionAddNotesParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/transactions/${transactionID}/notes`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Override AI Categorization
   *
   * @example
   * ```ts
   * const response = await client.transactions.categorize(
   *   'string',
   *   { category: 'string' },
   * );
   * ```
   */
  categorize(
    transactionID: string,
    body: TransactionCategorizeParams,
    options?: RequestOptions,
  ): APIPromise<TransactionCategorizeResponse> {
    return this._client.put(path`/transactions/${transactionID}/categorize`, { body, ...options });
  }

  /**
   * Initiate Transaction Dispute
   *
   * @example
   * ```ts
   * await client.transactions.initiateDispute('string', {
   *   reason: 'service_not_rendered',
   *   evidenceFiles: ['string', 'string'],
   * });
   * ```
   */
  initiateDispute(
    transactionID: string,
    body: TransactionInitiateDisputeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/transactions/${transactionID}/dispute`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Split Transaction Across Multiple Categories
   *
   * @example
   * ```ts
   * await client.transactions.split('string', {
   *   splits: [
   *     { category: 'string', amount: 9448.960685756352 },
   *     { category: 'string', amount: 2797.3194260200084 },
   *   ],
   * });
   * ```
   */
  split(transactionID: string, body: TransactionSplitParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/transactions/${transactionID}/split`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TransactionRetrieveResponse {
  id: string;

  amount: number;

  currency: string;

  date: string;

  description: string;

  category?: string;

  notes?: string;
}

export interface TransactionListResponse {
  value?: string;
}

export interface TransactionCategorizeResponse {
  id: string;

  amount: number;

  currency: string;

  date: string;

  description: string;

  category?: string;

  notes?: string;
}

export interface TransactionListParams {
  limit?: number;

  maxAmount?: number;

  minAmount?: number;

  offset?: number;

  type?: string;
}

export interface TransactionAddNotesParams {
  notes: string;
}

export interface TransactionCategorizeParams {
  category: string;

  applyToFuture?: boolean;
}

export interface TransactionInitiateDisputeParams {
  reason: 'fraudulent' | 'duplicate' | 'incorrect_amount' | 'service_not_rendered';

  /**
   * URIs to evidence
   */
  evidenceFiles?: Array<string>;
}

export interface TransactionSplitParams {
  splits: Array<TransactionSplitParams.Split>;
}

export namespace TransactionSplitParams {
  export interface Split {
    amount?: number;

    category?: string;
  }
}

Transactions.Recurring = Recurring;
Transactions.Insights = Insights;

export declare namespace Transactions {
  export {
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionCategorizeResponse as TransactionCategorizeResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionAddNotesParams as TransactionAddNotesParams,
    type TransactionCategorizeParams as TransactionCategorizeParams,
    type TransactionInitiateDisputeParams as TransactionInitiateDisputeParams,
    type TransactionSplitParams as TransactionSplitParams,
  };

  export {
    Recurring as Recurring,
    type RecurringListResponse as RecurringListResponse,
    type RecurringCreateParams as RecurringCreateParams,
  };

  export {
    Insights as Insights,
    type InsightGetCashFlowPredictionResponse as InsightGetCashFlowPredictionResponse,
    type InsightGetSpendingTrendsResponse as InsightGetSpendingTrendsResponse,
  };
}
