import { Box, LinkProps, Typography, TypographyProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {
  isLink?: boolean;
} & TypographyProps;

const LogoTypography = ({ onClick }: { onClick?: () => void }) => (
  <Box display='flex' alignItems='center' onClick={() => onClick && onClick()}>
    <Typography variant='h2' color='text.primary' fontFamily='termina'>
      TOOLS
    </Typography>
  </Box>
);

export const Logo = (props: Props & LinkProps) => {
  const navigate = useNavigate();
  if (!props.isLink) {
    return <LogoTypography />;
  }

  return <LogoTypography onClick={() => navigate('/home')} />;
};
