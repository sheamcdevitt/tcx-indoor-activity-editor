import { PaletteMode, PaletteOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { colors } from './colors';
import { typography } from './typography';

const light: PaletteOptions = {
  primary: {
    main: colors.main,
  },
  secondary: {
    main: colors.slate,
  },
  success: {
    main: colors.green,
    dark: colors.japaneseLaurel,
    light: colors.caribbeanGreen,
  },
  warning: {
    main: colors.chelseaGem,
  },
  action: {
    active: colors.black,
    hover: colors.springWood,
  },
  error: {
    main: colors.carnation,
  },
  background: {
    default: colors.white,
    paper: colors.lightBeige,
  },
};

const dark: PaletteOptions = {
  primary: {
    main: colors.main,
  },
  secondary: {
    main: colors.white,
  },
  success: {
    main: colors.green,
    dark: colors.japaneseLaurel,
  },
  warning: {
    main: colors.chelseaGem,
  },
  action: {
    active: colors.black,
    hover: '#1e1e1e',
  },
  error: {
    main: colors.carnation,
  },
  background: {
    default: '#2e2e2e',
    paper: '#121212',
  },
};

const Palette = (mode: PaletteMode) => {
  const palette = mode === 'dark' ? dark : light;

  return createTheme({
    palette: {
      mode,
      ...palette,
    },
    typography,
  });
};

export default Palette;
