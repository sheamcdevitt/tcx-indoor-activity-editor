import { StyledEngineProvider } from '@mui/material';
import ThemeCustomization from 'themes';
import Routes from './routes';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeCustomization>
        <Routes />
      </ThemeCustomization>
    </StyledEngineProvider>
  );
}

export default App;
