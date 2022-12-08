import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Conversation, Message } from '@lib/types';
import { MessagesList } from '@components/MessagesList';
import { MessageInput } from '@components/MessageInput';
import { useAuth } from '@providers/Auth';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      borderLeft: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(2),
    },
  }),
  {
    name: 'ConversationView',
  },
);

type ConversationViewProps = {
  conversation: Conversation;
};

export const ConversationView: React.FC<ConversationViewProps> = ({ conversation }) => {
  const classes = useStyles();
  const { user } = useAuth();

  const [selectedMessage, setSelectedMessage] = React.useState<Message>();

  return (
    <div className={classes.root}>
      <MessagesList
        conversation={conversation}
        onMessageClick={(message) => {
          // only allow the user to edit their own messages
          if (user.id !== message.created_by.id) return;

          if (message.id === selectedMessage?.id) {
            setSelectedMessage(undefined);
          } else {
            setSelectedMessage(message);
          }
        }}
        selectedMessage={selectedMessage}
      />
      <MessageInput
        key={selectedMessage ? `edit-${selectedMessage.id}` : 'send'}
        message={selectedMessage}
        conversation={conversation}
        onSubmit={() => setSelectedMessage(undefined)}
      />
    </div>
  );
};
