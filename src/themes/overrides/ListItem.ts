export default function ListItem() {
  return {
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'rgb(0,0,0,0.23)',
          },
          '&.Mui-selected:hover': {
            backgroundColor: 'rgb(0,0,0,0.23)',
          },
        },
      },
    },
  };
}
