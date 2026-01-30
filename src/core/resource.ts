// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Garbage } from '../client';

export abstract class APIResource {
  protected _client: Garbage;

  constructor(client: Garbage) {
    this._client = client;
  }
}
