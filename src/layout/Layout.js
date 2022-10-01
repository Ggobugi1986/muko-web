// Import React
import React from 'react';

// Import Contexts
import { layoutContext } from 'contexts';

// Import Layouts
import { DesktopLayout, MobileLayout } from './layouts';

// Import Other Modules
import { isBrowser } from 'react-device-detect';

const Layout = () => {
  // Set Context Values
  const value = {};

  return (
    <layoutContext.Provider value={value}>
      {isBrowser ? <DesktopLayout /> : <MobileLayout />}
    </layoutContext.Provider>
  );
};

export default Layout;
