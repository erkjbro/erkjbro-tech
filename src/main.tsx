import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { GlobalStyle } from "./main.styled";
import { App } from "./app";

const root = createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
