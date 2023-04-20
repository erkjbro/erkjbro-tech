import { createContext, type FC, type ReactNode, useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { THEMES } from "./constants";

enum ThemeOptions {
  Light = "light",
  Dark = "dark"
}

interface StyledContextProps {
  activeTheme: ThemeOptions;
  updateActiveTheme: (newTheme: ThemeOptions) => void;
}

const StyledContext = createContext<StyledContextProps>({
  activeTheme: ThemeOptions.Light,
  updateActiveTheme: () => { /* do nothing */ }
});

interface StyledProviderProps {
  children: ReactNode;
}

const StyledProvider: FC<StyledProviderProps> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<ThemeOptions>(ThemeOptions.Light);

  const updateActiveTheme = useCallback((newTheme: ThemeOptions) => {
    setActiveTheme(newTheme);
  }, []);

  useEffect(() => {
    const darkThemeMq: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkThemeMq.matches) {
      updateActiveTheme(ThemeOptions.Dark);
    }

    const mqListener = (e: MediaQueryListEvent): void => {
      console.log("System theme preference changed: ", e);
      updateActiveTheme(e.matches ?
        ThemeOptions.Dark : ThemeOptions.Light
      );
    };

    darkThemeMq.addEventListener("change", mqListener);

    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, [updateActiveTheme]);

  const value = {
    activeTheme,
    ThemeOptions,
    updateActiveTheme
  };

  return (
    <StyledContext.Provider value={value}>
      <ThemeProvider theme={THEMES[activeTheme]}>
        {children}
      </ThemeProvider>
    </StyledContext.Provider>
  );
};

export { StyledContext, StyledProvider };
