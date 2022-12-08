import { ChatClientState, FakeChatClient } from '@lib/fake-chat-client';
import { Conversation } from '@lib/types';
import { useAuth } from '@providers/Auth';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const chatClient = new FakeChatClient();

type ChatContextValue = {
  clientState: ChatClientState;
  conversations: Conversation[];
  sendMessage: (conversationId: string, message: string) => Promise<void>;
  updateMessage: (conversationId: string, messageId: string, message: string) => Promise<void>;
};

export const ChatContext = createContext<ChatContextValue>({
  clientState: 'connecting',
  conversations: [],
  sendMessage: async () => {},
  updateMessage: async () => {},
});

export const ChatProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { user } = useAuth();
  const [clientState, setClientState] = useState<ChatClientState>('connecting');
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const unsubscribeClientStateChange = chatClient.on('clientState:change', setClientState);
    const unsubscribeConversationsStateChange = chatClient.on(
      'conversations:change',
      setConversations,
    );

    return () => {
      unsubscribeClientStateChange();
      unsubscribeConversationsStateChange();
    };
  }, []);

  const sendMessage = useCallback(
    async (conversationId: string, text: string) => {
      return chatClient.submitMessage({
        conversationId,
        text,
        by: user,
      });
    },
    [user],
  );

  const updateMessage = useCallback(
    async (conversationId: string, messageId: string, text: string) => {
      return chatClient.updateMessage({
        messageId,
        conversationId,
        text,
      });
    },
    [],
  );

  const value: ChatContextValue = useMemo(
    () => ({
      clientState,
      conversations,
      sendMessage,
      updateMessage,
    }),
    [clientState, conversations, sendMessage, updateMessage],
  );
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
