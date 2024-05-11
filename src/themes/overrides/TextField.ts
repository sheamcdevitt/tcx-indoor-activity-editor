export default function TextField() {
  return {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: {
          marginBottom: 24,
        },
      },
    },
  };
}
