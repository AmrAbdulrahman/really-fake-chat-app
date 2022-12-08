import React, { useRef } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { Conversation, Message } from '@lib/types';
import { useForm, Controller } from 'react-hook-form';
import SendIcon from '@material-ui/icons/Send';
import { useChat } from '@providers/Chat';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  textField: {},
  input: {
    borderRadius: 10,
  },
}));

type MessageInputProps = {
  conversation: Conversation;
  message?: Message;
  onSubmit?: () => void;
};

type MessageInputFormValues = {
  text: string;
};

export const MessageInput: React.FC<MessageInputProps> = ({
  conversation,
  message,
  onSubmit: onSubmitFromProps,
}) => {
  const isEditMode = !!message;
  const classes = useStyles();
  const chat = useChat();
  const { handleSubmit, control, reset } = useForm<MessageInputFormValues>({
    defaultValues: {
      text: message?.text,
    },
  });

  const inputRef = useRef<HTMLInputElement>();

  const [isSendingMessage, setIsSendingMessage] = React.useState(false);
  const [errorSendingMessage, setError] = React.useState(false);

  const onSubmit = async (data: MessageInputFormValues) => {
    try {
      setIsSendingMessage(true);
      setError(false);

      if (isEditMode) {
        await chat.updateMessage(conversation.id, message.id, data.text);
      } else {
        await chat.sendMessage(conversation.id, data.text);
      }

      reset(); // reset form values!
      // refocus on text input
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);

      onSubmitFromProps?.();
    } catch (err) {
      setError(true);
    } finally {
      setIsSendingMessage(false);
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field, fieldState }) => (
            <TextField
              inputRef={inputRef}
              autoFocus
              disabled={isSendingMessage}
              className={classes.textField}
              InputProps={{
                className: classes.input,
                endAdornment: (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                    disabled={Boolean(fieldState.error || !field.value)}
                  >
                    {isEditMode ? 'Edit' : 'Send'}
                  </Button>
                ),
              }}
              fullWidth
              value={field.value}
              onChange={(e) => field.onChange(e)}
              error={!!fieldState.error?.message || errorSendingMessage}
              helperText={
                fieldState.error?.message || (errorSendingMessage ? 'Failed to send message' : '')
              }
              variant="outlined"
            />
          )}
          control={control}
          name="text"
          defaultValue=""
        />
      </form>
    </div>
  );
};
