export default function CardMedia() {
  return {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          objectFit: 'contain',
          backgroundSize: 'contain',
        },
      },
    },
  };
}
