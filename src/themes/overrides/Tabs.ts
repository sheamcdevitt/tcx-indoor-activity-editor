import {DefaultTheme} from '@mui/styles';

export default function Tabs(theme: DefaultTheme) {
  return {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: theme.palette.primary.main,
          color: 'pink',
        },
      },
    },
  };
}
