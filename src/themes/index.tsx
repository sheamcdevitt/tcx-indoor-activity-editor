import Palette from './palette';
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  PaletteMode,
} from '@mui/material';
import ColorModeContext from 'contexts/colorModeContext';
import React from 'react';
import Overrides from './overrides';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export default function ThemeCustomization({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<PaletteMode>(
    (localStorage.getItem('mode') as PaletteMode) || 'light'
  );

  React.useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = Palette(mode);
  theme.components = Overrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
}
