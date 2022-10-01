// Import React
import { lazy } from 'react';

// Import Pages
const ArticleDesktop = lazy(() => import('./desktop/pages/article'));

const ArticleMobile = lazy(() => import('./mobile/pages/article'));

export const articleDesktopRoutes = [
  {
    path: '/article/:id',
    element: <ArticleDesktop />,
  },
];

export const articleMobileRoutes = [
  {
    path: '/article/:id',
    element: <ArticleMobile />,
  },
];
