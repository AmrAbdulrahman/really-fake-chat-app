import { ConversationsList } from '@components/ConversationsList';
import { ConversationView } from '@components/ConversationView';
import {
  AppBar,
  Dialog,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { useChat } from '@providers/Chat';
import React, { useMemo } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(
  () => ({
    root: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    dialogContentWrapper: {
      paddingTop: 48,
      height: '100%',
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

  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('sm'));

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
      {selectedConversation && isDesktop && (
        <ConversationView conversation={selectedConversation} />
      )}
      {selectedConversation && !isDesktop && (
        <Dialog fullScreen open onClose={() => setSelectedConversationId(undefined)}>
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setSelectedConversationId(undefined)}
                aria-label="close"
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6">{selectedConversation.user.name}</Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.dialogContentWrapper}>
            <ConversationView conversation={selectedConversation} />
          </div>
        </Dialog>
      )}
    </div>
  );
};
