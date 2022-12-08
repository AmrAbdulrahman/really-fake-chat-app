import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '@pages';

import { Routes as RoutesEnum } from './routes';

export const AppRouter: React.FC = () => (
  <Routes>
    <Route path={RoutesEnum.Home} element={<HomePage />} />
    <Route path="*" element={<Navigate to={RoutesEnum.Home} replace />} />
  </Routes>
);
