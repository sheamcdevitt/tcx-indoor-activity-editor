import { Box, Tooltip, Link, Typography } from '@mui/material';
import { GitHub, Email, Coffee } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box
      p={{
        xs: '12px 0px',
        sm: '24px 3rem',
        md: '24px 5rem',
        lg: '24px 0',
      }}
      flexDirection={{ xs: 'column', sm: 'row' }}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        margin: '64px auto 0',
        borderTop: '1px solid #eaeaea',
        blur: '10px',
      }}
    >
      <Typography
        variant='h4'
        color='text.secondary'
        align='center'
        fontFamily='termina'
      >
        {'© 2024 Shéa McDevitt'}
      </Typography>
      <Box
        justifyContent={{ xs: 'center', lg: 'space-between' }}
        sx={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Tooltip title='Buy me a coffee' arrow dir='up' placement='top'>
          <Link
            href='https://www.buymeacoffee.com/personall'
            target='_blank'
            rel='noopener noreferrer'
            color={'#8e88fb '}
          >
            <Coffee fontSize='large' />
          </Link>
        </Tooltip>
        <Tooltip title='My GitHub' arrow dir='up' placement='top'>
          <Link
            href='https://github.com/sheamcdevitt'
            target='_blank'
            rel='noopener noreferrer'
            color={'#8e88fb '}
          >
            <GitHub fontSize='large' />
          </Link>
        </Tooltip>
        <Tooltip title='Email me' arrow dir='up' placement='top'>
          <Link
            href='mailto:enquiries@xhea.me
          ?subject=Hey Shéa
          &body=I got a question about tools.sheamcdevitt.com'
            target='_blank'
            rel='noopener noreferrer'
            color={'#8e88fb '}
          >
            <Email fontSize='large' />
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
};
