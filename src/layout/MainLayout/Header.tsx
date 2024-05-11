import { AppBar, Box } from '@mui/material';
import { Logo } from 'components/Typography/Logo';

export const Header = () => {
  return (
    <AppBar
      position='fixed'
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: '#f2f2f2',
        opacity: 0.9,
        boxShadow: 'none',
        position: 'fixed',
        px: { md: 0, lg: 18 },
      }}
    >
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          justifyContent: 'center',
          alignContent: 'center',
          gap: '3rem',
          margin: '12px 16px',
        }}
      >
        <Logo variant='h2' alignSelf='center' isLink pt={1} />
      </Box>
      <Box
        m='32px'
        sx={{
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
          gap: '3rem',
        }}
      >
        <Logo variant='h2' isLink />
      </Box>
    </AppBar>
  );
};
