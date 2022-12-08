import { MainLayout } from '@components/MainLayout';
import { Chat } from '@containers/Chat';
import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Chat />
    </MainLayout>
  );
};
