// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Simulate extends APIResource {
  /**
   * Run a 'What-If' Financial Simulation (Standard)
   *
   * @example
   * ```ts
   * const simulate = await client.ai.oracle.simulate.create({
   *   prompt: 'string',
   *   parameters: {},
   * });
   * ```
   */
  create(body: SimulateCreateParams, options?: RequestOptions): APIPromise<SimulateCreateResponse> {
    return this._client.post('/ai/oracle/simulate', { body, ...options });
  }

  /**
   * run Advanced Simulation
   *
   * @example
   * ```ts
   * const response = await client.ai.oracle.simulate.advanced({
   *   prompt: 'string',
   *   scenarios: [
   *     { name: 'string', description: 'string' },
   *     { name: 'string', description: 'string' },
   *   ],
   * });
   * ```
   */
  advanced(body: SimulateAdvancedParams, options?: RequestOptions): APIPromise<SimulateAdvancedResponse> {
    return this._client.post('/ai/oracle/simulate/advanced', { body, ...options });
  }

  /**
   * run Monte Carlo Simulation
   *
   * @example
   * ```ts
   * await client.ai.oracle.simulate.monteCarlo({
   *   iterations: 2896,
   *   variables: ['string', 'string'],
   * });
   * ```
   */
  monteCarlo(body: SimulateMonteCarloParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/ai/oracle/simulate/monte-carlo', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SimulateCreateResponse {
  simulationId: string;

  status: string;

  outcomeNarrative?: string;

  projectedValue?: number;
}

export interface SimulateAdvancedResponse {
  simulationId: string;

  status: string;

  outcomeNarrative?: string;

  projectedValue?: number;
}

export interface SimulateCreateParams {
  /**
   * Describe the financial scenario
   */
  prompt: string;

  /**
   * Key variables like duration, rate, or amount
   */
  parameters?: unknown;
}

export interface SimulateAdvancedParams {
  prompt: string;

  scenarios: Array<SimulateAdvancedParams.Scenario>;
}

export namespace SimulateAdvancedParams {
  export interface Scenario {
    name: string;

    description?: string;
  }
}

export interface SimulateMonteCarloParams {
  iterations: number;

  variables: Array<string>;
}

export declare namespace Simulate {
  export {
    type SimulateCreateResponse as SimulateCreateResponse,
    type SimulateAdvancedResponse as SimulateAdvancedResponse,
    type SimulateCreateParams as SimulateCreateParams,
    type SimulateAdvancedParams as SimulateAdvancedParams,
    type SimulateMonteCarloParams as SimulateMonteCarloParams,
  };
}
