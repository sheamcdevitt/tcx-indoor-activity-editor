import { DefaultTheme } from '@mui/styles';

// export const arkButtonVariant = {
//   props: {variant: 'ark'},
//   style: {
//     backgroundColor: colors.brick,
//     color: colors.white,
//     '&:hover': {
//       backgroundColor: colors.darkenedBrick,
//     },
//     '&.Mui-disabled': {
//       color: colors.white,
//       backgroundColor: colors.fadedBrick,
//     },
//     '&.MuiLoadingButton-loading .MuiLoadingButton-loadingIndicator': {
//       color: colors.white,
//     },
//   },
// };

// export const arkOutlinedButtonVariant = {
//   props: {variant: 'arkOutline'},
//   style: {
//     backgroundColor: colors.white,

//     color: colors.brick,
//     border: `1px solid ${colors.brick}`,
//     '&:hover': {
//       backgroundColor: new Color(colors.darkenedBrick).lightness(96).hex(),
//       color: colors.darkenedBrick,

//       border: `1px solid ${colors.darkenedBrick}`,
//     },
//     '&.Mui-disabled': {
//       color: colors.white,
//       backgroundColor: colors.fadedBrick,
//     },
//   },
// };

// export const buttonVariants = [
//   {
//     props: {variant: 'dark'},
//     style: {
//       backgroundColor: 'common.black',
//       color: colors.white,
//       '&:hover': {
//         backgroundColor: colors.lightBeige,
//         color: 'common.black',
//       },
//       '&.Mui-disabled': {
//         backgroundColor: colors.lightBeige,
//       },
//     },
//   },
//   arkButtonVariant,
//   arkOutlinedButtonVariant,
//   {
//     props: {variant: 'faded'},
//     style: {
//       height: 23,
//       color: 'grey.300',
//       fontSize: 14,
//       fontWeight: 100,
//       border: '1px solid grey.300',
//       padding: '8px',
//     },
//   },
// ];

export default function Button(theme: DefaultTheme) {
  return {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: 'termina',
          borderRadius: 8,
          // backgroundColor: 'white',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            transition: 'all 0.2s ease-in-out',
            transform: 'scale(1.05)',
          },
          '&:not(:hover)': {
            transition: 'all 0.2s ease-in-out',
            transform: 'scale(1)',
          },
        },
      },
    },
  };
}
