import React, {createContext, useState, useContext, useCallback} from 'react';

import {ThemeProvider as CustomThemeProvider} from 'styled-components';

import Dark from '../styles/themes/dark';
import Light from '../styles/themes/light';

const themes = {
  dark: Dark,
  light: Light,
};

const ThemeContext = createContext({});

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme,
      }}>
      <CustomThemeProvider theme={themes[theme]}>
        {children}
      </CustomThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}
