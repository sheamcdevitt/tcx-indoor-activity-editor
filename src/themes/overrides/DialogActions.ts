import {DefaultTheme} from '@mui/styles';

export default function DialogAction(theme: DefaultTheme) {
  return {
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '0 32px 32px 32px',
          [theme.breakpoints.down('xs')]: {
            padding: '0 16px 32px 16px',
          },
        },
      },
    },
  };
}
