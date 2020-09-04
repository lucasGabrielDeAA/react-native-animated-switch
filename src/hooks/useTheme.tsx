import React, {createContext, useState, useContext, useCallback} from 'react';

import {ThemeProvider as CustomThemeProvider} from 'styled-components';

import Dark from '../styles/themes/dark';
import Light from '../styles/themes/light';

interface ThemeContextData {
  toggleTheme: any;
  theme: string;
}

const themes = {
  dark: Dark,
  light: Light,
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

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

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}
