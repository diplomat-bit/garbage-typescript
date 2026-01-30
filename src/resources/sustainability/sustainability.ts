// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ImpactAPI from './impact';
import {
  Impact,
  ImpactListGlobalGreenProjectsParams,
  ImpactListGlobalGreenProjectsResponse,
  ImpactRetrievePortfolioImpactResponse,
} from './impact';
import * as OffsetsAPI from './offsets';
import { OffsetPurchaseCreditsParams, OffsetRetireCreditsParams, Offsets } from './offsets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Sustainability extends APIResource {
  offsets: OffsetsAPI.Offsets = new OffsetsAPI.Offsets(this._client);
  impact: ImpactAPI.Impact = new ImpactAPI.Impact(this._client);

  /**
   * Analysis of ledger data through Gemini to estimate CO2e output.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sustainability.retrieveCarbonFootprint();
   * ```
   */
  retrieveCarbonFootprint(
    options?: RequestOptions,
  ): APIPromise<SustainabilityRetrieveCarbonFootprintResponse> {
    return this._client.get('/sustainability/carbon-footprint', options);
  }
}

export interface SustainabilityRetrieveCarbonFootprintResponse {
  period: string;

  status: 'OPTIMAL' | 'HIGH_OUTPUT' | 'CRITICAL';

  totalKgCO2e: number;

  aiRecommendations?: Array<string>;

  breakdown?: Array<SustainabilityRetrieveCarbonFootprintResponse.Breakdown>;
}

export namespace SustainabilityRetrieveCarbonFootprintResponse {
  export interface Breakdown {
    category?: string;

    value?: number;
  }
}

Sustainability.Offsets = Offsets;
Sustainability.Impact = Impact;

export declare namespace Sustainability {
  export { type SustainabilityRetrieveCarbonFootprintResponse as SustainabilityRetrieveCarbonFootprintResponse };

  export {
    Offsets as Offsets,
    type OffsetPurchaseCreditsParams as OffsetPurchaseCreditsParams,
    type OffsetRetireCreditsParams as OffsetRetireCreditsParams,
  };

  export {
    Impact as Impact,
    type ImpactListGlobalGreenProjectsResponse as ImpactListGlobalGreenProjectsResponse,
    type ImpactRetrievePortfolioImpactResponse as ImpactRetrievePortfolioImpactResponse,
    type ImpactListGlobalGreenProjectsParams as ImpactListGlobalGreenProjectsParams,
  };
}
