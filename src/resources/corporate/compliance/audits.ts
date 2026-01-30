// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Audits extends APIResource {
  /**
   * Request Real-time Compliance Audit
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.compliance.audits.requestAudit({
   *     auditScope: 'string',
   *     endDate: '2018-06-28',
   *     startDate: '2006-12-17',
   *   });
   * ```
   */
  requestAudit(
    body: AuditRequestAuditParams,
    options?: RequestOptions,
  ): APIPromise<AuditRequestAuditResponse> {
    return this._client.post('/corporate/compliance/audits', { body, ...options });
  }

  /**
   * Retrieve AI-Generated Audit Report
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.compliance.audits.retrieveReport(
   *     'string',
   *   );
   * ```
   */
  retrieveReport(auditID: string, options?: RequestOptions): APIPromise<AuditRetrieveReportResponse> {
    return this._client.get(path`/corporate/compliance/audits/${auditID}/report`, options);
  }
}

export interface AuditRequestAuditResponse {
  auditId?: string;
}

export interface AuditRetrieveReportResponse {
  generatedAt: string;

  reportId: string;

  findings?: Array<string>;
}

export interface AuditRequestAuditParams {
  auditScope: string;

  endDate: string;

  startDate: string;
}

export declare namespace Audits {
  export {
    type AuditRequestAuditResponse as AuditRequestAuditResponse,
    type AuditRetrieveReportResponse as AuditRetrieveReportResponse,
    type AuditRequestAuditParams as AuditRequestAuditParams,
  };
}
