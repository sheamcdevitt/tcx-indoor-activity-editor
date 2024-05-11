import {colors} from 'themes/colors';

export default function FilledInput() {
  return {
    MuiFilledInput: {
      styleOverrides: {
        multiline: {
          paddingTop: '16px !important',
        },
        root: {
          backgroundColor: colors.wildSand,
          border: '1px solid grey.300',
          borderRadius: '4px',
          '&.Mui-focused': {
            backgroundColor: colors.wildSand,
          },
          '&:before': {
            display: 'none',
          },
          '&:hover': {
            backgroundColor: colors.wildSand,
          },
        },
      },
    },
  };
}
