// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnomaliesAPI from './anomalies';
import { Anomalies, AnomalyListDetectedResponse, AnomalyUpdateStatusParams } from './anomalies';
import * as CardsAPI from './cards';
import {
  CardGetTransactionsResponse,
  CardIssueVirtualCardParams,
  CardIssueVirtualCardResponse,
  CardListAllParams,
  CardListAllResponse,
  CardRequestPhysicalCardParams,
  CardRequestPhysicalCardResponse,
  CardToggleCardLockParams,
  CardUpdateControlsParams,
  Cards,
} from './cards';
import * as ComplianceAPI from './compliance/compliance';
import {
  Compliance,
  ComplianceScreenMediaParams,
  ComplianceScreenMediaResponse,
  ComplianceScreenPepParams,
  ComplianceScreenPepResponse,
  ComplianceScreenSanctionsParams,
  ComplianceScreenSanctionsResponse,
} from './compliance/compliance';
import * as GovernanceAPI from './governance/governance';
import { Governance } from './governance/governance';
import * as RiskAPI from './risk/risk';
import {
  Risk,
  RiskGetRiskExposureResponse,
  RiskRunStressTestParams,
  RiskRunStressTestResponse,
} from './risk/risk';
import * as TreasuryAPI from './treasury/treasury';
import {
  Treasury,
  TreasuryExecuteBulkPayoutsParams,
  TreasuryGetLiquidityPositionsResponse,
} from './treasury/treasury';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Corporate extends APIResource {
  compliance: ComplianceAPI.Compliance = new ComplianceAPI.Compliance(this._client);
  treasury: TreasuryAPI.Treasury = new TreasuryAPI.Treasury(this._client);
  cards: CardsAPI.Cards = new CardsAPI.Cards(this._client);
  risk: RiskAPI.Risk = new RiskAPI.Risk(this._client);
  governance: GovernanceAPI.Governance = new GovernanceAPI.Governance(this._client);
  anomalies: AnomaliesAPI.Anomalies = new AnomaliesAPI.Anomalies(this._client);

  /**
   * Onboard a New Corporate Entity
   *
   * @example
   * ```ts
   * const response = await client.corporate.onboard({
   *   entityType: 'CORP',
   *   jurisdiction: 'DE',
   *   legalName: 'string',
   *   taxId: 'string',
   *   beneficialOwners: [
   *     {
   *       id: 'string',
   *       name: 'string',
   *       email: 'OJsMNh@jTCbAVwjqYWhGnyLe.nddf',
   *       identityVerified: false,
   *       address: { ... },
   *       preferences: { key_0: 5595 },
   *       securityStatus: { ... },
   *     },
   *     {
   *       id: 'string',
   *       name: 'string',
   *       email: 'VrwpDkjpFxkAg10@iRDWTgHNAzKDVkvGQrZ.ecv',
   *       identityVerified: true,
   *       address: { ... },
   *       preferences: { key_0: 'string' },
   *       securityStatus: { ... },
   *     },
   *   ],
   * });
   * ```
   */
  onboard(body: CorporateOnboardParams, options?: RequestOptions): APIPromise<CorporateOnboardResponse> {
    return this._client.post('/corporate/onboard', { body, ...options });
  }
}

export interface CorporateOnboardResponse {
  corporateId?: string;

  status?: string;
}

export interface CorporateOnboardParams {
  entityType: 'LLC' | 'CORP' | 'NGO' | 'PARTNERSHIP';

  jurisdiction: string;

  /**
   * Registered business name
   */
  legalName: string;

  /**
   * EIN, VAT, or local tax ID
   */
  taxId: string;

  beneficialOwners?: Array<CorporateOnboardParams.BeneficialOwner>;
}

export namespace CorporateOnboardParams {
  export interface BeneficialOwner {
    id: string;

    email: string;

    identityVerified: boolean;

    name: string;

    address?: BeneficialOwner.Address;

    preferences?: unknown;

    securityStatus?: BeneficialOwner.SecurityStatus;
  }

  export namespace BeneficialOwner {
    export interface Address {
      city: string;

      country: string;

      street: string;

      state?: string;

      zip?: string;
    }

    export interface SecurityStatus {
      lastLogin?: string;

      twoFactorEnabled?: boolean;
    }
  }
}

Corporate.Compliance = Compliance;
Corporate.Treasury = Treasury;
Corporate.Cards = Cards;
Corporate.Risk = Risk;
Corporate.Governance = Governance;
Corporate.Anomalies = Anomalies;

export declare namespace Corporate {
  export {
    type CorporateOnboardResponse as CorporateOnboardResponse,
    type CorporateOnboardParams as CorporateOnboardParams,
  };

  export {
    Compliance as Compliance,
    type ComplianceScreenMediaResponse as ComplianceScreenMediaResponse,
    type ComplianceScreenPepResponse as ComplianceScreenPepResponse,
    type ComplianceScreenSanctionsResponse as ComplianceScreenSanctionsResponse,
    type ComplianceScreenMediaParams as ComplianceScreenMediaParams,
    type ComplianceScreenPepParams as ComplianceScreenPepParams,
    type ComplianceScreenSanctionsParams as ComplianceScreenSanctionsParams,
  };

  export {
    Treasury as Treasury,
    type TreasuryGetLiquidityPositionsResponse as TreasuryGetLiquidityPositionsResponse,
    type TreasuryExecuteBulkPayoutsParams as TreasuryExecuteBulkPayoutsParams,
  };

  export {
    Cards as Cards,
    type CardGetTransactionsResponse as CardGetTransactionsResponse,
    type CardIssueVirtualCardResponse as CardIssueVirtualCardResponse,
    type CardListAllResponse as CardListAllResponse,
    type CardRequestPhysicalCardResponse as CardRequestPhysicalCardResponse,
    type CardIssueVirtualCardParams as CardIssueVirtualCardParams,
    type CardListAllParams as CardListAllParams,
    type CardRequestPhysicalCardParams as CardRequestPhysicalCardParams,
    type CardToggleCardLockParams as CardToggleCardLockParams,
    type CardUpdateControlsParams as CardUpdateControlsParams,
  };

  export {
    Risk as Risk,
    type RiskGetRiskExposureResponse as RiskGetRiskExposureResponse,
    type RiskRunStressTestResponse as RiskRunStressTestResponse,
    type RiskRunStressTestParams as RiskRunStressTestParams,
  };

  export { Governance as Governance };

  export {
    Anomalies as Anomalies,
    type AnomalyListDetectedResponse as AnomalyListDetectedResponse,
    type AnomalyUpdateStatusParams as AnomalyUpdateStatusParams,
  };
}
