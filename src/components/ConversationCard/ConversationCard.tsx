import React, { useMemo } from 'react';
import {
  ListItem,
  makeStyles,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Conversation } from '@lib/types';
import { last } from 'lodash';
import { formatTimeDistance } from '@lib/utils/formatTimeDistance';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {},
  online: {
    overflow: 'visible',
    position: 'relative',
    '&::after': {
      display: 'block',
      position: 'absolute',
      content: '""',
      right: 0,
      top: 0,
      width: 10,
      height: 10,
      background: theme.palette.success.dark,
      borderRadius: '50%',
    },
  },
  lastMessageSummary: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
}));

type ConversationCardProps = {
  conversation: Conversation;
  selected?: boolean;
  online?: boolean;
  onClick?: (conversation: Conversation) => void;
};

export const ConversationCard: React.FC<ConversationCardProps> = ({
  conversation,
  selected,
  online,
  onClick,
}) => {
  const classes = useStyles();
  const initials = useMemo(() => conversation.user.name.substring(0, 2), [conversation]);
  const lastMessage = useMemo(() => {
    const messages = conversation.messages.sort((m1, m2) => m1.last_updated - m2.last_updated);
    return last(messages);
  }, [conversation]);

  return (
    <ListItem
      key={conversation.id}
      button
      className={classes.root}
      selected={selected}
      onClick={() => onClick?.(conversation)}
    >
      <ListItemAvatar>
        <Avatar className={clsx(online && classes.online)}>{initials}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={conversation.user.name}
        secondary={
          lastMessage && (
            <>
              <Typography className={classes.lastMessageSummary}>{lastMessage.text}</Typography>
              <Tooltip title={conversation.last_updated}>
                <>{formatTimeDistance(conversation.last_updated)}</>
              </Tooltip>
            </>
          )
        }
      />
    </ListItem>
  );
};
