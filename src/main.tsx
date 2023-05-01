import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { GlobalStyle } from "./main.styled";
import { App } from "./app";
import { StyledProvider } from "@erkjbro-tech/shared/ui";

const root = createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <GlobalStyle />
    <StyledProvider>
      <App />
    </StyledProvider>
  </StrictMode>
);
