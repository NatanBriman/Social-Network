import { Brightness4, Brightness7 } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext();
const toggleMode = (prevMode) => (prevMode === 'light' ? 'dark' : 'light');
const getCurrentThemeIcon = (mode) => (mode === 'dark' ? <Brightness7 /> : <Brightness4 />);

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(toggleMode);
      },
      currentThemeIcon: () => getCurrentThemeIcon(mode),
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeContextProvider;
