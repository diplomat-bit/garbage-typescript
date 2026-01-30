// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ModelsAPI from './models';
import { ModelFineTuneParams, ModelFineTuneResponse, ModelRetrieveVersionsResponse, Models } from './models';
import * as AdsAPI from './ads/ads';
import { AdListResponse, AdOptimizeParams, AdOptimizeResponse, AdRetrieveResponse, Ads } from './ads/ads';
import * as AdvisorAPI from './advisor/advisor';
import { Advisor } from './advisor/advisor';
import * as AgentAPI from './agent/agent';
import { Agent, AgentRetrieveCapabilitiesResponse } from './agent/agent';
import * as IncubatorAPI from './incubator/incubator';
import {
  Incubator,
  IncubatorRetrievePitchesResponse,
  IncubatorValidateParams,
  IncubatorValidateResponse,
} from './incubator/incubator';
import * as OracleAPI from './oracle/oracle';
import { Oracle } from './oracle/oracle';

export class AI extends APIResource {
  oracle: OracleAPI.Oracle = new OracleAPI.Oracle(this._client);
  incubator: IncubatorAPI.Incubator = new IncubatorAPI.Incubator(this._client);
  ads: AdsAPI.Ads = new AdsAPI.Ads(this._client);
  advisor: AdvisorAPI.Advisor = new AdvisorAPI.Advisor(this._client);
  agent: AgentAPI.Agent = new AgentAPI.Agent(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
}

AI.Oracle = Oracle;
AI.Incubator = Incubator;
AI.Ads = Ads;
AI.Advisor = Advisor;
AI.Agent = Agent;
AI.Models = Models;

export declare namespace AI {
  export { Oracle as Oracle };

  export {
    Incubator as Incubator,
    type IncubatorRetrievePitchesResponse as IncubatorRetrievePitchesResponse,
    type IncubatorValidateResponse as IncubatorValidateResponse,
    type IncubatorValidateParams as IncubatorValidateParams,
  };

  export {
    Ads as Ads,
    type AdRetrieveResponse as AdRetrieveResponse,
    type AdListResponse as AdListResponse,
    type AdOptimizeResponse as AdOptimizeResponse,
    type AdOptimizeParams as AdOptimizeParams,
  };

  export { Advisor as Advisor };

  export { Agent as Agent, type AgentRetrieveCapabilitiesResponse as AgentRetrieveCapabilitiesResponse };

  export {
    Models as Models,
    type ModelFineTuneResponse as ModelFineTuneResponse,
    type ModelRetrieveVersionsResponse as ModelRetrieveVersionsResponse,
    type ModelFineTuneParams as ModelFineTuneParams,
  };
}
