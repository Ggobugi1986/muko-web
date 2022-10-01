// Import Services
import { articleDesktopRoutes, articleMobileRoutes } from 'services/article';
import { clubDesktopRoutes, clubMobileRoutes } from 'services/club';
import { portalDesktopRoutes, portalMobileRoutes } from 'services/portal';

export const desktopRoutes = [
  ...articleDesktopRoutes,
  ...clubDesktopRoutes,
  ...portalDesktopRoutes,
];

export const mobileRoutes = [
  ...articleMobileRoutes,
  ...clubMobileRoutes,
  ...portalMobileRoutes,
];
