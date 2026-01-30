// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Wallets extends APIResource {
  /**
   * Create Non-Custodial Wallet
   *
   * @example
   * ```ts
   * const wallet = await client.web3.wallets.create({
   *   network: 'ETH',
   * });
   * ```
   */
  create(body: WalletCreateParams, options?: RequestOptions): APIPromise<WalletCreateResponse> {
    return this._client.post('/web3/wallets', { body, ...options });
  }

  /**
   * List Connected Wallets
   *
   * @example
   * ```ts
   * const wallets = await client.web3.wallets.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WalletListResponse> {
    return this._client.get('/web3/wallets', options);
  }

  /**
   * Get Multi-chain Token Balances
   *
   * @example
   * ```ts
   * const response = await client.web3.wallets.getBalances(
   *   'string',
   * );
   * ```
   */
  getBalances(walletID: string, options?: RequestOptions): APIPromise<WalletGetBalancesResponse> {
    return this._client.get(path`/web3/wallets/${walletID}/balances`, options);
  }

  /**
   * Link External Web3 Wallet (MetaMask/Phantom)
   *
   * @example
   * ```ts
   * await client.web3.wallets.link({
   *   address: 'string',
   *   provider: 'string',
   *   signature: 'string',
   * });
   * ```
   */
  link(body: WalletLinkParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/web3/wallets/connect', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WalletCreateResponse {
  id: string;

  address: string;

  network: string;
}

export interface WalletListResponse {
  data?: Array<WalletListResponse.Data>;
}

export namespace WalletListResponse {
  export interface Data {
    id: string;

    address: string;

    network: string;
  }
}

export interface WalletGetBalancesResponse {
  balances?: Array<WalletGetBalancesResponse.Balance>;
}

export namespace WalletGetBalancesResponse {
  export interface Balance {
    amount?: string;

    symbol?: string;
  }
}

export interface WalletCreateParams {
  network: string;
}

export interface WalletLinkParams {
  address: string;

  provider: string;

  signature: string;
}

export declare namespace Wallets {
  export {
    type WalletCreateResponse as WalletCreateResponse,
    type WalletListResponse as WalletListResponse,
    type WalletGetBalancesResponse as WalletGetBalancesResponse,
    type WalletCreateParams as WalletCreateParams,
    type WalletLinkParams as WalletLinkParams,
  };
}
