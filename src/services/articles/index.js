// Import React
import { lazy } from 'react';

// Import Pages
const ArticleDesktop = lazy(() => import('./desktop/pages/article'));

const ArticleMobile = lazy(() => import('./mobile/pages/article'));
const ArticlesMobile = lazy(() => import('./mobile/pages/articles'));

export const articleDesktopRoutes = [
  {
    path: '/article/:id',
    element: <ArticleDesktop />,
  },
];

export const articleMobileRoutes = [
  {
    path: '/articles',
    element: <ArticlesMobile />,
  },
  {
    path: '/article/:id',
    element: <ArticleMobile />,
  },
];
