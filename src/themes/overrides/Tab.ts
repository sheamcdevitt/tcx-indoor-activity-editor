import {colors} from 'themes/colors';

export default function Tab() {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          flexDirection: 'row',
          fontSize: '16px',
          '&:not(.Mui-selected)': {
            color: colors.fadedText,
          },
          textTransform: 'none',
          fontWeight: 'bold',
          '@media (min-width: 600px)': {
            minWidth: 'initial',
          },
        },
        labelIcon: {
          minHeight: 'initial',
        },
        textColorInherit: {
          opacity: 1,
        },
      },
    },
  };
}
