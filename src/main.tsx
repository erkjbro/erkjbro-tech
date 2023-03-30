import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

import { GlobalStyle } from "./main.styled";
import { App } from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
