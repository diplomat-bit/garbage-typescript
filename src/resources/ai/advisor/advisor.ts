// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChatAPI from './chat';
import { Chat, ChatCreateParams, ChatCreateResponse, ChatRetrieveHistoryResponse } from './chat';
import * as ToolsAPI from './tools';
import { ToolListResponse, Tools } from './tools';

export class Advisor extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
}

Advisor.Chat = Chat;
Advisor.Tools = Tools;

export declare namespace Advisor {
  export {
    Chat as Chat,
    type ChatCreateResponse as ChatCreateResponse,
    type ChatRetrieveHistoryResponse as ChatRetrieveHistoryResponse,
    type ChatCreateParams as ChatCreateParams,
  };

  export { Tools as Tools, type ToolListResponse as ToolListResponse };
}
