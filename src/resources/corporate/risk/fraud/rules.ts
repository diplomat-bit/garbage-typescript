// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Rules extends APIResource {
  /**
   * Create Custom Fraud Rule
   *
   * @example
   * ```ts
   * await client.corporate.risk.fraud.rules.createCustom({
   *   logic: {},
   *   name: 'string',
   * });
   * ```
   */
  createCustom(body: RuleCreateCustomParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/corporate/risk/fraud/rules', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List Active Fraud Rule Set
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.risk.fraud.rules.listActive();
   * ```
   */
  listActive(options?: RequestOptions): APIPromise<RuleListActiveResponse> {
    return this._client.get('/corporate/risk/fraud/rules', options);
  }

  /**
   * Update a fraud rule
   *
   * @example
   * ```ts
   * await client.corporate.risk.fraud.rules.updateRule(
   *   'string',
   *   { action: 'string', name: 'string' },
   * );
   * ```
   */
  updateRule(
    ruleID: string,
    body: RuleUpdateRuleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/corporate/risk/fraud/rules/${ruleID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RuleListActiveResponse {
  rules?: Array<unknown>;
}

export interface RuleCreateCustomParams {
  logic: unknown;

  name: string;
}

export interface RuleUpdateRuleParams {
  action?: string;

  name?: string;
}

export declare namespace Rules {
  export {
    type RuleListActiveResponse as RuleListActiveResponse,
    type RuleCreateCustomParams as RuleCreateCustomParams,
    type RuleUpdateRuleParams as RuleUpdateRuleParams,
  };
}
