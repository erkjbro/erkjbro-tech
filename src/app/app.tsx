import { type FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Loader } from "@erkjbro-tech/shared/ui-library";
import { routes } from "./routes";

const router = createBrowserRouter(
  routes
);

const App: FC = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
    />
  )
}

export default App;
