import { createContext, type FC, type ReactNode, useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

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
  updateActiveTheme: () => { /* do nothing */
  }
});

const themes = {
  light: {
    primary: "#11114a",
    secondary: "#e8ef3d",
    background: "#f5f5f5ff"
  },
  dark: {
    primary: "#e8ef3d",
    secondary: "#11114a",
    background: "#f5f5f5ff"
  }
};

interface StyledProviderProps {
  children: ReactNode;
}

const StyledProvider: FC<StyledProviderProps> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<ThemeOptions>(ThemeOptions.Light);

  const updateActiveTheme = useCallback((newTheme: ThemeOptions) => {
    setActiveTheme(newTheme);
  }, []);

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      updateActiveTheme(ThemeOptions.Dark);
    }
  }, [updateActiveTheme]);

  const value = {
    activeTheme,
    ThemeOptions,
    updateActiveTheme
  };

  return (
    <StyledContext.Provider value={value}>
      <ThemeProvider theme={themes[activeTheme]}>
        {children}
      </ThemeProvider>
    </StyledContext.Provider>
  );
};

export { StyledContext, StyledProvider };