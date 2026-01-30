// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContractsAPI from './contracts';
import { ContractDeployParams, Contracts } from './contracts';
import * as NetworkAPI from './network';
import { Network, NetworkGetStatusResponse } from './network';
import * as NFTsAPI from './nfts';
import { NFTListResponse, NFTMintParams, NFTs } from './nfts';
import * as TransactionsAPI from './transactions';
import {
  TransactionBridgeParams,
  TransactionInitiateParams,
  TransactionSendParams,
  TransactionSendResponse,
  TransactionSwapParams,
  Transactions,
} from './transactions';
import * as WalletsAPI from './wallets';
import {
  WalletCreateParams,
  WalletCreateResponse,
  WalletGetBalancesResponse,
  WalletLinkParams,
  WalletListResponse,
  Wallets,
} from './wallets';

export class Web3 extends APIResource {
  network: NetworkAPI.Network = new NetworkAPI.Network(this._client);
  wallets: WalletsAPI.Wallets = new WalletsAPI.Wallets(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  nfts: NFTsAPI.NFTs = new NFTsAPI.NFTs(this._client);
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
}

Web3.Network = Network;
Web3.Wallets = Wallets;
Web3.Transactions = Transactions;
Web3.NFTs = NFTs;
Web3.Contracts = Contracts;

export declare namespace Web3 {
  export { Network as Network, type NetworkGetStatusResponse as NetworkGetStatusResponse };

  export {
    Wallets as Wallets,
    type WalletCreateResponse as WalletCreateResponse,
    type WalletListResponse as WalletListResponse,
    type WalletGetBalancesResponse as WalletGetBalancesResponse,
    type WalletCreateParams as WalletCreateParams,
    type WalletLinkParams as WalletLinkParams,
  };

  export {
    Transactions as Transactions,
    type TransactionSendResponse as TransactionSendResponse,
    type TransactionBridgeParams as TransactionBridgeParams,
    type TransactionInitiateParams as TransactionInitiateParams,
    type TransactionSendParams as TransactionSendParams,
    type TransactionSwapParams as TransactionSwapParams,
  };

  export { NFTs as NFTs, type NFTListResponse as NFTListResponse, type NFTMintParams as NFTMintParams };

  export { Contracts as Contracts, type ContractDeployParams as ContractDeployParams };
}
