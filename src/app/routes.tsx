import { FC } from "react";
import { Outlet, type RouteObject, useRouteError } from "react-router-dom";

import Portfolio from "./portfolio/portfolio";
import { portfolioLoader } from './portfolio/portfolio-store';
import { Layout } from "@erkjbro-tech/meta";

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
            loader: portfolioLoader,
            element: <Portfolio />
          },
          {
            path: "about",
            // lazy import only works if the file exports a component named "Component"... :(
            lazy: () => import("./about")
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
