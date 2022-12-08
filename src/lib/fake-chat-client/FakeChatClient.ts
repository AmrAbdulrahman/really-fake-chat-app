import { v4 } from 'uuid';
import { EventManager, Listener, Unsubscribe } from '@lib/event-manager';
import { Conversation, Message, User } from '@lib/types';
import { wait } from '@lib/utils';
import reduce from 'lodash/reduce';
import { cloneDeep, random, set } from 'lodash';
import { randSentence } from '@ngneat/falso';

import { initialFakeData } from './initial-fake-data';

const initialFakeDataMap = reduce(
  // convert conversations array to a map
  // for the ease of use when adding/editing new messages on the client
  initialFakeData,
  (result, conversation) => {
    return {
      ...result,
      [conversation.id]: conversation,
    };
  },
  {},
);

export type ChatClientState = 'connecting' | 'connected' | 'error';

export type ChatClientEventType = {
  'clientState:change': ChatClientState;
  'conversations:change': Conversation[];
  // ... here we can add more specific event types
  // but for the simplicity of this task, we keep it only two event types
};

export type SubmitMessagePayload = {
  by: User;
  text: string;
  conversationId: string;
};

export type UpdateMessagePayload = {
  conversationId: string;
  messageId: string;
  text: string;
};

type ConversationsMap = Record<string, Conversation>;

export class FakeChatClient {
  private conversations: ConversationsMap = {};
  private events = new EventManager<ChatClientEventType>();

  constructor() {
    this.connect();
  }

  private setConversations(
    value: ConversationsMap | ((current: ConversationsMap) => ConversationsMap),
  ) {
    this.conversations = typeof value === 'function' ? value(this.conversations) : value;
    this.events.trigger(
      'conversations:change',
      Object.values(this.conversations).sort((c1, c2) => c1.last_updated - c2.last_updated),
    );
  }

  public async connect() {
    try {
      this.events.trigger('clientState:change', 'connecting');

      // fake loading state
      await wait(random(500, 1500));

      this.setConversations(initialFakeDataMap);
      this.events.trigger('clientState:change', 'connected');
    } catch (err) {
      this.events.trigger('clientState:change', 'error');
    }
  }

  public async submitMessage(payload: SubmitMessagePayload, depth = 0) {
    const { by, conversationId, text } = payload;

    if (!this.conversations[conversationId]) {
      return;
    }

    const conversation = this.conversations[conversationId];

    await wait(random(0, 500)); // wait a random ms from 0 to 500

    this.setConversations((current) => {
      const now = Date.now();

      const newValue = cloneDeep(current);
      set(newValue, `${conversationId}.last_updated`, now);
      set(newValue, `${conversationId}.messages[${current[conversationId].messages.length}]`, {
        created_at: now,
        last_updated: now,
        last_updated22: now,
        created_by: by,
        id: v4(),
        text,
      } as Message);

      return newValue;
    });

    const shouldFakeReply = random(0, 1) === 1;

    if (shouldFakeReply && depth < 2) {
      this.submitMessage(
        {
          by: conversation.user,
          conversationId,
          text: `I am a random fake reply! ${randSentence()}`,
        },
        depth + 1,
      );
    }
  }

  public async updateMessage(payload: UpdateMessagePayload) {
    const { messageId, conversationId, text } = payload;

    if (!this.conversations[conversationId]) {
      return;
    }

    const conversation = this.conversations[conversationId];

    if (!conversation.messages.find((m) => m.id === messageId)) {
      return;
    }

    const messageIndex = conversation.messages.findIndex((m) => m.id === messageId);

    await wait(random(0, 500)); // wait a random ms from 0 to 500

    this.setConversations((current) => {
      const now = Date.now();
      const newValue = cloneDeep(current);

      set(newValue, `${conversationId}.last_updated`, now);
      set(newValue, `${conversationId}.messages[${messageIndex}].text`, text);
      set(newValue, `${conversationId}.messages[${messageIndex}].last_updated`, now);

      return newValue;
    });
  }

  public on<E extends keyof ChatClientEventType>(
    e: E,
    listener: Listener<ChatClientEventType[E]>,
  ): Unsubscribe {
    return this.events.subscribe(e, listener);
  }
}
