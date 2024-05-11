import {DefaultTheme} from '@mui/styles';

export default function DialogContent(theme: DefaultTheme) {
  return {
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '16px 32px 32px',
          fontSize: '22px',
          colors: 'common.black',
          [theme.breakpoints.down('xs')]: {
            padding: '16px 24px',
          },
        },
      },
    },
  };
}
