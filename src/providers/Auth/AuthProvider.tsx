import { Amr } from '@lib/fake-chat-client/initial-fake-data';
import { User } from '@lib/types';
import React, { createContext, useContext } from 'react';

type AuthContextValue = {
  user: User;
  // isLoading
  // isLoggedIn
  // logout()
  // login()
};

const HARDCODED_AUTH_CONTEXT_VALUE: AuthContextValue = {
  user: Amr,
};

export const AuthContext = createContext<AuthContextValue>(HARDCODED_AUTH_CONTEXT_VALUE);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AuthContext.Provider value={HARDCODED_AUTH_CONTEXT_VALUE}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
