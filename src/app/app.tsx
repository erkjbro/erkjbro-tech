import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppContainer } from './app-styled';
import { Portfolio } from './portfolio/portfolio';
import { Personal } from './personal/personal';
import { Sitenav } from '@erkjbro-tech/shared/meta';

export const App: FC = () => {
  useEffect(() => {
    document.title = 'Erik J Brown Tech LLC';
  }, []);

  const AppRoutes: FC = () => (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
  );

  return (
    <AppContainer>
      <Sitenav />
      <AppRoutes />
    </AppContainer>
  );
};
