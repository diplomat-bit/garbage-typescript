// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CashFlowAPI from './cash-flow';
import { CashFlow, CashFlowForecastParams, CashFlowForecastResponse } from './cash-flow';
import * as LiquidityAPI from './liquidity';
import {
  Liquidity,
  LiquidityConfigurePoolingParams,
  LiquidityOptimizeParams,
  LiquidityOptimizeResponse,
} from './liquidity';
import * as SweepingAPI from './sweeping';
import { Sweeping, SweepingConfigureRulesParams, SweepingExecuteSweepParams } from './sweeping';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Treasury extends APIResource {
  cashFlow: CashFlowAPI.CashFlow = new CashFlowAPI.CashFlow(this._client);
  liquidity: LiquidityAPI.Liquidity = new LiquidityAPI.Liquidity(this._client);
  sweeping: SweepingAPI.Sweeping = new SweepingAPI.Sweeping(this._client);

  /**
   * Execute bulk payouts
   *
   * @example
   * ```ts
   * await client.corporate.treasury.executeBulkPayouts({
   *   payouts: [
   *     { recipient_id: 'string', amount: 5744.972374072148 },
   *     { recipient_id: 'string', amount: 4503.646628538282 },
   *   ],
   * });
   * ```
   */
  executeBulkPayouts(body: TreasuryExecuteBulkPayoutsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/corporate/treasury/bulk-payouts', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get current liquidity positions
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.treasury.getLiquidityPositions();
   * ```
   */
  getLiquidityPositions(options?: RequestOptions): APIPromise<TreasuryGetLiquidityPositionsResponse> {
    return this._client.get('/corporate/treasury/liquidity-positions', options);
  }
}

export interface TreasuryGetLiquidityPositionsResponse {
  positions?: Array<unknown>;

  total_liquidity?: number;
}

export interface TreasuryExecuteBulkPayoutsParams {
  payouts: Array<TreasuryExecuteBulkPayoutsParams.Payout>;
}

export namespace TreasuryExecuteBulkPayoutsParams {
  export interface Payout {
    amount?: number;

    recipient_id?: string;
  }
}

Treasury.CashFlow = CashFlow;
Treasury.Liquidity = Liquidity;
Treasury.Sweeping = Sweeping;

export declare namespace Treasury {
  export {
    type TreasuryGetLiquidityPositionsResponse as TreasuryGetLiquidityPositionsResponse,
    type TreasuryExecuteBulkPayoutsParams as TreasuryExecuteBulkPayoutsParams,
  };

  export {
    CashFlow as CashFlow,
    type CashFlowForecastResponse as CashFlowForecastResponse,
    type CashFlowForecastParams as CashFlowForecastParams,
  };

  export {
    Liquidity as Liquidity,
    type LiquidityOptimizeResponse as LiquidityOptimizeResponse,
    type LiquidityConfigurePoolingParams as LiquidityConfigurePoolingParams,
    type LiquidityOptimizeParams as LiquidityOptimizeParams,
  };

  export {
    Sweeping as Sweeping,
    type SweepingConfigureRulesParams as SweepingConfigureRulesParams,
    type SweepingExecuteSweepParams as SweepingExecuteSweepParams,
  };
}
