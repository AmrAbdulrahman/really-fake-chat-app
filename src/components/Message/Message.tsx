import React from 'react';
import { makeStyles, Tooltip, Typography } from '@material-ui/core';
import { Message as IMessage } from '@lib/types';
import clsx from 'clsx';
import { useAuth } from '@providers/Auth';
import { formatTimeDistance } from '@lib/utils/formatTimeDistance';
import { formatDateTime } from '@lib/utils/formatDateTime';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.grey[200],
      padding: theme.spacing(1),
      borderRadius: 10,
      '&:not(:first-child)': {
        marginBottom: theme.spacing(1),
      },
    },
    self: {
      alignSelf: 'flex-end',
      backgroundColor: theme.palette.success.dark,
      color: theme.palette.common.white,
      '&:hover': {
        cursor: 'pointer',
      },
    },
    selected: {
      backgroundColor: theme.palette.success.light,
    },
  }),
  {
    name: 'Message',
  },
);

export type MessageProps = {
  message: IMessage;
  onClick?: (message: IMessage) => void;
  isSelected?: boolean;
};

export const Message: React.FC<MessageProps> = ({ message, isSelected, onClick }) => {
  const classes = useStyles();
  const { user } = useAuth();

  const myMessage = message.created_by.id === user.id;

  return (
    <Typography
      className={clsx(classes.root, myMessage && classes.self, isSelected && classes.selected)}
      onClick={() => onClick?.(message)}
    >
      {!myMessage && (
        <>
          <strong>{message.created_by.name}</strong>
          <br />
        </>
      )}

      {message.text}

      <br />

      <Tooltip title={formatDateTime(message.created_at)}>
        <small>{formatTimeDistance(message.created_at)}</small>
      </Tooltip>

      {message.created_at !== message.last_updated && (
        <Tooltip title={`Edited at ${formatDateTime(message.last_updated)}`}>
          <small> | Edited</small>
        </Tooltip>
      )}
    </Typography>
  );
};
