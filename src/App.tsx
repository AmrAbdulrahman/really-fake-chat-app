import { BrowserRouter as ReactRouterDOM } from 'react-router-dom';
import { AppRouter } from '@lib/router';
import { MuiProvider } from '@lib/mui';
import { ChatProvider } from '@providers/Chat';
import { AuthProvider } from '@providers/Auth';

export const App = () => {
  return (
    <MuiProvider>
      <ReactRouterDOM>
        <AuthProvider>
          <ChatProvider>
            <AppRouter />
          </ChatProvider>
        </AuthProvider>
      </ReactRouterDOM>
    </MuiProvider>
  );
};
