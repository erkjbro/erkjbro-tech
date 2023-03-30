import { FC } from "react";
import { Outlet, type RouteObject, useNavigation, useRouteError } from "react-router-dom";
import { Sitenav } from "@erkjbro-tech/shared/meta";

import Portfolio from "./portfolio/portfolio";
import { StyledApp as StyledLayout } from "./app.styled";

const Layout: FC = () => {
  const navigation = useNavigation();
  return (
    <StyledLayout>
      <Sitenav />
      <div>
        {navigation.state !== "idle" && <p>Navigation in progress...</p>}
      </div>
      <Outlet />
    </StyledLayout>
  );
};

const RootErrorBoundary: FC = () => {
  const error = useRouteError() as Error;
  return (
    <div>
      <h1>
        Uh oh, something went terribly wrong&nbsp;
        <span role="img" aria-label="emoji">😩</span>
      </h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button onClick={() => (window.location.href = "/")}>
        Click here to reload the app
      </button>
    </div>
  );
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Outlet />,
        errorElement: <RootErrorBoundary />,
        children: [
          {
            index: true,
            element: <Portfolio />
          },
          {
            path: "personal",
            // lazy import only works if the file exports a component named "Component"... :(
            lazy: () => import("./personal/personal")
          },
          {
            path: "*",
            element: <div>404</div>
          }
        ]
      }
    ]
  }
];
