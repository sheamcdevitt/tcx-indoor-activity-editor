import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import Wave from 'assets/waves-bg.svg';
import { Box, CircularProgress } from '@mui/material';
import { ScrollToAnchor } from 'components/ScrollToAnchor';

const MiddleOfPageLoader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <CircularProgress />
  </Box>
);

const MainLayout = lazy(() => import('layout/MainLayout'));

const Tools = lazy(() =>
  import('pages/Tools/Tools').then((module) => ({ default: module.Tools }))
);

const rootStyle = document.documentElement.style;
rootStyle.backgroundImage = `url(${Wave})`;
rootStyle.backgroundRepeat = 'no-repeat';
rootStyle.backgroundPosition = 'center';
rootStyle.backgroundSize = 'cover';

document.body.style.background = 'transparent';

const DefaultRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Suspense fallback={<MiddleOfPageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Tools />} />
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default DefaultRoutes;
