import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Portfolio } from './portfolio/portfolio';
import { Personal } from './personal/personal';
import { Sitenav } from '@erkjbro-tech/shared/meta';

import styles from './app.module.css';

export const App: React.FC = () => {
  useEffect(() => { document.title = 'Erik J Brown Tech LLC' }, []);

  const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
  );

  return (
    <div className={styles['app']}>
      <Sitenav />
      <AppRoutes />
    </div>
  );
};
