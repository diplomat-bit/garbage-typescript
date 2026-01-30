// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OverdraftSettingsAPI from './overdraft-settings';
import {
  OverdraftSettingRetrieveOverdraftSettingsResponse,
  OverdraftSettingUpdateOverdraftSettingsParams,
  OverdraftSettings,
} from './overdraft-settings';
import * as StatementsAPI from './statements';
import { StatementListResponse, StatementRetrievePdfParams, Statements } from './statements';
import * as TransactionsAPI from './transactions';
import {
  TransactionRetrieveArchivedParams,
  TransactionRetrieveArchivedResponse,
  TransactionRetrievePendingResponse,
  Transactions,
} from './transactions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Accounts extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  statements: StatementsAPI.Statements = new StatementsAPI.Statements(this._client);
  overdraftSettings: OverdraftSettingsAPI.OverdraftSettings = new OverdraftSettingsAPI.OverdraftSettings(
    this._client,
  );

  /**
   * Close Financial Account
   *
   * @example
   * ```ts
   * await client.accounts.delete('string');
   * ```
   */
  delete(accountID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/accounts/${accountID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Link an External Financial Institution
   *
   * @example
   * ```ts
   * const response = await client.accounts.link({
   *   institutionId: 'string',
   *   publicToken: 'string',
   * });
   * ```
   */
  link(body: AccountLinkParams, options?: RequestOptions): APIPromise<AccountLinkResponse> {
    return this._client.post('/accounts/link', { body, ...options });
  }

  /**
   * Open a New Quantum Internal Account
   *
   * @example
   * ```ts
   * const response = await client.accounts.open({
   *   currency: 'USD',
   *   initialDeposit: 8885.832056335083,
   *   productType: 'high_yield_vault',
   *   owners: ['string', 'string'],
   * });
   * ```
   */
  open(body: AccountOpenParams, options?: RequestOptions): APIPromise<AccountOpenResponse> {
    return this._client.post('/accounts/open', { body, ...options });
  }

  /**
   * Get Historical Balance Snapshots
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.retrieveBalanceHistory('string');
   * ```
   */
  retrieveBalanceHistory(
    accountID: string,
    query: AccountRetrieveBalanceHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveBalanceHistoryResponse> {
    return this._client.get(path`/accounts/${accountID}/balance-history`, { query, ...options });
  }

  /**
   * get Account Details
   *
   * @example
   * ```ts
   * const response = await client.accounts.retrieveDetails(
   *   'string',
   * );
   * ```
   */
  retrieveDetails(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveDetailsResponse> {
    return this._client.get(path`/accounts/${accountID}/details`, options);
  }

  /**
   * list Accounts
   *
   * @example
   * ```ts
   * const response = await client.accounts.retrieveMe();
   * ```
   */
  retrieveMe(options?: RequestOptions): APIPromise<AccountRetrieveMeResponse> {
    return this._client.get('/accounts/me', options);
  }
}

export interface AccountLinkResponse {
  linkSessionId?: string;

  status?: string;
}

export interface AccountOpenResponse {
  id: string;

  currency: string;

  currentBalance: number;

  institutionName: string;

  type: string;

  name?: string;
}

export interface AccountRetrieveBalanceHistoryResponse {
  history?: Array<AccountRetrieveBalanceHistoryResponse.History>;
}

export namespace AccountRetrieveBalanceHistoryResponse {
  export interface History {
    balance?: number;

    timestamp?: string;
  }
}

export interface AccountRetrieveDetailsResponse {
  id: string;

  currency: string;

  currentBalance: number;

  institutionName: string;

  type: string;

  name?: string;
}

export interface AccountRetrieveMeResponse {
  value?: string;
}

export interface AccountLinkParams {
  institutionId: string;

  publicToken: string;
}

export interface AccountOpenParams {
  currency: string;

  initialDeposit: number;

  productType: 'quantum_checking' | 'elite_savings' | 'high_yield_vault';

  /**
   * User IDs for joint accounts
   */
  owners?: Array<string>;
}

export interface AccountRetrieveBalanceHistoryParams {
  period?: '1d' | '7d' | '30d' | '1y' | 'all';
}

Accounts.Transactions = Transactions;
Accounts.Statements = Statements;
Accounts.OverdraftSettings = OverdraftSettings;

export declare namespace Accounts {
  export {
    type AccountLinkResponse as AccountLinkResponse,
    type AccountOpenResponse as AccountOpenResponse,
    type AccountRetrieveBalanceHistoryResponse as AccountRetrieveBalanceHistoryResponse,
    type AccountRetrieveDetailsResponse as AccountRetrieveDetailsResponse,
    type AccountRetrieveMeResponse as AccountRetrieveMeResponse,
    type AccountLinkParams as AccountLinkParams,
    type AccountOpenParams as AccountOpenParams,
    type AccountRetrieveBalanceHistoryParams as AccountRetrieveBalanceHistoryParams,
  };

  export {
    Transactions as Transactions,
    type TransactionRetrieveArchivedResponse as TransactionRetrieveArchivedResponse,
    type TransactionRetrievePendingResponse as TransactionRetrievePendingResponse,
    type TransactionRetrieveArchivedParams as TransactionRetrieveArchivedParams,
  };

  export {
    Statements as Statements,
    type StatementListResponse as StatementListResponse,
    type StatementRetrievePdfParams as StatementRetrievePdfParams,
  };

  export {
    OverdraftSettings as OverdraftSettings,
    type OverdraftSettingRetrieveOverdraftSettingsResponse as OverdraftSettingRetrieveOverdraftSettingsResponse,
    type OverdraftSettingUpdateOverdraftSettingsParams as OverdraftSettingUpdateOverdraftSettingsParams,
  };
}
