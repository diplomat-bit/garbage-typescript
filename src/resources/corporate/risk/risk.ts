// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FraudAPI from './fraud/fraud';
import { Fraud, FraudAnalyzeTransactionParams, FraudAnalyzeTransactionResponse } from './fraud/fraud';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Risk extends APIResource {
  fraud: FraudAPI.Fraud = new FraudAPI.Fraud(this._client);

  /**
   * Get Aggregate Risk Exposure
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.risk.getRiskExposure();
   * ```
   */
  getRiskExposure(options?: RequestOptions): APIPromise<RiskGetRiskExposureResponse> {
    return this._client.get('/corporate/risk/exposure', options);
  }

  /**
   * Simulates extreme market conditions (e.g., 2008 crash, hyperinflation) against
   * the corporate ledger.
   *
   * @example
   * ```ts
   * const response = await client.corporate.risk.runStressTest({
   *   scenarioType: 'MARKET_CRASH',
   *   intensity: 0.9115157435249488,
   * });
   * ```
   */
  runStressTest(
    body: RiskRunStressTestParams,
    options?: RequestOptions,
  ): APIPromise<RiskRunStressTestResponse> {
    return this._client.post('/corporate/risk/stress-test', { body, ...options });
  }
}

export interface RiskGetRiskExposureResponse {
  assetConcentration?: unknown;

  counterpartyRisk?: Array<unknown>;

  valueAtRisk?: number;
}

export interface RiskRunStressTestResponse {
  aiNarrative?: string;

  liquidityGap?: number;

  resilienceScore?: number;
}

export interface RiskRunStressTestParams {
  scenarioType: 'BANK_RUN' | 'MARKET_CRASH' | 'REGULATORY_SHOCK' | 'DEPEGGING';

  intensity?: number;
}

Risk.Fraud = Fraud;

export declare namespace Risk {
  export {
    type RiskGetRiskExposureResponse as RiskGetRiskExposureResponse,
    type RiskRunStressTestResponse as RiskRunStressTestResponse,
    type RiskRunStressTestParams as RiskRunStressTestParams,
  };

  export {
    Fraud as Fraud,
    type FraudAnalyzeTransactionResponse as FraudAnalyzeTransactionResponse,
    type FraudAnalyzeTransactionParams as FraudAnalyzeTransactionParams,
  };
}
