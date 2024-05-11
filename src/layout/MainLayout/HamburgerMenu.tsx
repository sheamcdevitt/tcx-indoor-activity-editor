import React from 'react';

import { Menu } from '@mui/icons-material';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';

const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  React.useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <>
      <IconButton
        edge='start'
        sx={{
          fontSize: '8rem',
          color: 'black',
          height: 'fit-content',
        }}
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer(true)}
      >
        <Menu fontSize='large' />
      </IconButton>
    </>
  );
};

export default HamburgerMenu;
