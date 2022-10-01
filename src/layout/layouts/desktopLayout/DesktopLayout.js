// Import React
import React, { Suspense } from 'react';

// Import React-Router-Dom
import { useRoutes } from 'react-router-dom';

// Import Contexts
import { desktopLayoutContext } from 'contexts';

// Import Routes
import { desktopRoutes } from 'routes';

// Import Other Modules
import useMeasure from 'react-use-measure';

const DesktopLayout = () => {
  // Set UseMeasure Hooks
  const [ref, bounds] = useMeasure();

  // Set Context Values
  const value = {
    clientWidth: bounds.width,
    clientHeight: bounds.height,
  };

  return (
    <desktopLayoutContext.Provider value={value}>
      <div ref={ref} className="fixed inset-0">
        <Suspense>{useRoutes(desktopRoutes)}</Suspense>
      </div>
    </desktopLayoutContext.Provider>
  );
};

export default DesktopLayout;
