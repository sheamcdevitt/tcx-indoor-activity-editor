import {DefaultTheme} from '@mui/styles';

export default function DialogTitle(theme: DefaultTheme) {
  return {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '24px',
          lineHeight: '28px',
          padding: '32px 32px 16px',
          [theme.breakpoints.down('xs')]: {
            padding: '48px 24px 8px 24px',
          },
        },
      },
    },
  };
}
