// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PredictionsAPI from './predictions';
import {
  PredictionRetrieveInflationParams,
  PredictionRetrieveInflationResponse,
  PredictionRetrieveMarketCrashProbabilityResponse,
  Predictions,
} from './predictions';
import * as SimulateAPI from './simulate';
import {
  Simulate,
  SimulateAdvancedParams,
  SimulateAdvancedResponse,
  SimulateCreateParams,
  SimulateCreateResponse,
  SimulateMonteCarloParams,
} from './simulate';
import * as SimulationsAPI from './simulations';
import { SimulationListResponse, SimulationRetrieveResponse, Simulations } from './simulations';

export class Oracle extends APIResource {
  simulate: SimulateAPI.Simulate = new SimulateAPI.Simulate(this._client);
  predictions: PredictionsAPI.Predictions = new PredictionsAPI.Predictions(this._client);
  simulations: SimulationsAPI.Simulations = new SimulationsAPI.Simulations(this._client);
}

Oracle.Simulate = Simulate;
Oracle.Predictions = Predictions;
Oracle.Simulations = Simulations;

export declare namespace Oracle {
  export {
    Simulate as Simulate,
    type SimulateCreateResponse as SimulateCreateResponse,
    type SimulateAdvancedResponse as SimulateAdvancedResponse,
    type SimulateCreateParams as SimulateCreateParams,
    type SimulateAdvancedParams as SimulateAdvancedParams,
    type SimulateMonteCarloParams as SimulateMonteCarloParams,
  };

  export {
    Predictions as Predictions,
    type PredictionRetrieveInflationResponse as PredictionRetrieveInflationResponse,
    type PredictionRetrieveMarketCrashProbabilityResponse as PredictionRetrieveMarketCrashProbabilityResponse,
    type PredictionRetrieveInflationParams as PredictionRetrieveInflationParams,
  };

  export {
    Simulations as Simulations,
    type SimulationRetrieveResponse as SimulationRetrieveResponse,
    type SimulationListResponse as SimulationListResponse,
  };
}
