import React, { useEffect, useMemo } from 'react';
import { List, makeStyles, Theme, useMediaQuery } from '@material-ui/core';
import { Conversation } from '@lib/types';
import { ConversationCard } from '@components/ConversationCard';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      width: 320,
      minWidth: 320,
    },
  },
}));

type ConversationsListProps = {
  conversations: Conversation[];
  selectedId?: string;
  onConversationClick?: (conversation: Conversation) => void;
};

export const ConversationsList: React.FC<ConversationsListProps> = ({
  conversations,
  selectedId,
  onConversationClick,
}) => {
  const classes = useStyles();
  const sortedConversations = useMemo(
    () => conversations.sort((c1, c2) => c2.last_updated - c1.last_updated),
    [conversations],
  );

  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('sm'));

  // auto select first conversations when conversations are loaded
  useEffect(() => {
    if (sortedConversations.length && !selectedId && isDesktop) {
      onConversationClick?.(sortedConversations[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedConversations]);

  return (
    <List className={classes.root}>
      {sortedConversations.map((conversation, index) => (
        <ConversationCard
          key={conversation.id}
          conversation={conversation}
          online={Boolean(index % 2)}
          selected={conversation.id === selectedId}
          onClick={onConversationClick}
        />
      ))}
    </List>
  );
};
