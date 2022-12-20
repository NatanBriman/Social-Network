import { Brightness4, Brightness7 } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useMemo, useState } from 'react';

export const ThemeColorContext = createContext();
const INITIAL_THEME_COLOR = 'dark';

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(INITIAL_THEME_COLOR);

  const colorTheme = useMemo(
    () => ({
      toggleColorTheme: () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')),
      currentThemeIcon: () => (theme === 'dark' ? <Brightness7 /> : <Brightness4 />),
    }),
    [theme]
  );

  const currentTheme = useMemo(() => createTheme({ palette: { mode: theme } }), [theme]);

  return (
    <ThemeColorContext.Provider value={colorTheme}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </ThemeColorContext.Provider>
  );
};

export default ThemeContextProvider;
