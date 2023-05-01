import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Spinner } from "@erkjbro-tech/shared/ui";
import { routes } from "./routes";

const router = createBrowserRouter(
  routes
);

const App: FC = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Spinner />}
    />
  );
};

export default App;
