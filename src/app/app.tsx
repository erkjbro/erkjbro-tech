import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Portfolio } from './portfolio/portfolio';
import { Personal } from './personal/personal';
import { Sitenav } from '@erkjbro-tech/shared/meta';

const StyledApp = styled.div`
  text-align: center;
  height: 100vh;

  * {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

export const App: React.FC = () => {
  useEffect(() => {
    document.title = "Erik J Brown Tech LLC";
  }, []);

  const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
  )

  return (
    <StyledApp>
      <Sitenav />
      <AppRoutes />
    </StyledApp>
  );
}

export default App;
