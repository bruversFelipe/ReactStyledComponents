import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import themes from "./Themes";

const ContextTheme = React.createContext();

const ContextThemeProvider = ({ children }) => {
  const [themeState, setTheme] = useState("default");

  const saveTheme = item => {
    setTheme(item);
  };
  return (
    <ContextTheme.Provider
      value={{
        saveTheme,
        setTheme
      }}
    >
      <ThemeProvider theme={themes[themeState]}>{children}</ThemeProvider>
    </ContextTheme.Provider>
  );
};

export default ContextTheme;

export { ContextThemeProvider };
