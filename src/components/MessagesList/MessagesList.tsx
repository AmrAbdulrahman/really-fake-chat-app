import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core';
import { Conversation, Message as IMessage } from '@lib/types';
import { Message, MessageProps } from '@components/Message';

const useStyles = makeStyles(
  () => ({
    root: {
      flexGrow: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'column-reverse',
      overflowY: 'auto',
      alignItems: 'flex-start',
    },
  }),
  {
    name: 'MessagesList',
  },
);

type MessagesListProps = {
  conversation: Conversation;
  onMessageClick: MessageProps['onClick'];
  selectedMessage?: IMessage;
};

export const MessagesList: React.FC<MessagesListProps> = ({
  conversation,
  selectedMessage,
  onMessageClick,
}) => {
  const classes = useStyles();

  const sortedMessages = useMemo(
    () => conversation.messages.sort((m1, m2) => m2.created_at - m1.created_at),
    [conversation],
  );

  return (
    <div className={classes.root}>
      {sortedMessages.map((message) => (
        <Message
          key={message.id}
          message={message}
          onClick={onMessageClick}
          isSelected={message.id === selectedMessage?.id}
        />
      ))}
    </div>
  );
};
