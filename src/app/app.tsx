import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";

import { AppContainer } from "./app.styles";
import Portfolio from "./portfolio/portfolio";
import { Sitenav } from "@erkjbro-tech/shared/meta";

const Personal = lazy(() => import("./personal/personal"));

const App: FC = () => {
  const AppRoutes: FC = () => (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
  );

  return (
    <AppContainer>
      <Sitenav />
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </AppContainer>
  );
};

const Loader = () => (
  <StyledLoader>
    <HashLoader
      color={"#11114a"}
      loading={true}
      size={100}
      aria-label="Loading Spinner"
      data-testid="hash-loader"
    />
  </StyledLoader>
);

const StyledLoader = styled.div`
  display: flex;
  padding: 3rem 0;
  justify-content: center;
  align-items: center;
`;

export default App;
