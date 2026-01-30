// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProposalsAPI from './proposals';
import {
  ProposalCastVoteParams,
  ProposalCreateNewParams,
  ProposalListActiveResponse,
  Proposals,
} from './proposals';

export class Governance extends APIResource {
  proposals: ProposalsAPI.Proposals = new ProposalsAPI.Proposals(this._client);
}

Governance.Proposals = Proposals;

export declare namespace Governance {
  export {
    Proposals as Proposals,
    type ProposalListActiveResponse as ProposalListActiveResponse,
    type ProposalCastVoteParams as ProposalCastVoteParams,
    type ProposalCreateNewParams as ProposalCreateNewParams,
  };
}
