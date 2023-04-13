import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Spinner } from "@erkjbro-tech/shared/ui-library";
import { routes } from "./routes";

const router = createBrowserRouter(
  routes
);

// TODO: Handle with context so that the theme can be changed.
const appTheme = {
  primary: "#11114a",
  secondary: "#e8ef3d",
  background: "#f5f5f5ff"
};

const App: FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <RouterProvider
        router={router}
        fallbackElement={<Spinner />}
      />
    </ThemeProvider>
  );
};

export default App;
