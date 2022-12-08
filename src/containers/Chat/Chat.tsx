import { ConversationsList } from '@components/ConversationsList';
import { ConversationView } from '@components/ConversationView';
import { makeStyles, Typography } from '@material-ui/core';
import { useChat } from '@providers/Chat';
import React, { useMemo } from 'react';

const useStyles = makeStyles(
  () => ({
    root: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
  }),
  {
    name: 'Chat',
  },
);

export const Chat: React.FC = () => {
  const classes = useStyles();
  const { clientState, conversations } = useChat();
  const [selectedConversationId, setSelectedConversationId] = React.useState<string>();

  const selectedConversation = useMemo(
    () => conversations.find((conversation) => conversation.id === selectedConversationId),
    [conversations, selectedConversationId],
  );

  if (clientState === 'connecting') {
    return <Typography>Connecting...</Typography>;
  }

  if (clientState === 'error') {
    return <Typography color="error">Something went wrong!</Typography>;
  }

  return (
    <div className={classes.root}>
      <ConversationsList
        conversations={conversations}
        selectedId={selectedConversationId}
        onConversationClick={(conversation) => setSelectedConversationId(conversation.id)}
      />
      {selectedConversation && <ConversationView conversation={selectedConversation} />}
    </div>
  );
};
