// Import React
import { lazy } from 'react';

// Import Pages
const ClubDesktop = lazy(() => import('./desktop/pages/club'));
const ClubMobile = lazy(() => import('./mobile/pages/club'));

export const clubDesktopRoutes = [
  {
    path: '/club/:id',
    element: <ClubDesktop />,
  },
];

export const clubMobileRoutes = [
  {
    path: '/club/:id',
    element: <ClubMobile />,
  },
];
