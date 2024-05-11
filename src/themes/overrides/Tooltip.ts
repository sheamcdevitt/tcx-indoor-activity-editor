export default function Tooltip() {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          textAlign: 'center',
        },
      },
      defaultProps: {
        enterTouchDelay: 50,
      },
    },
  };
}
