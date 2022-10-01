// Import React
import React, { Suspense, useState } from 'react';

// Import React-Router-Dom
import { useLocation, useRoutes } from 'react-router-dom';

// Import Contexts
import { mobileLayoutContext } from 'contexts';

// Import Routes
import { mobileRoutes } from 'routes';

// Import UI
import { HeaderA } from 'ui/mobile';

// Import Other Modules
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

const MobileLayout = () => {
  // Set UseLocation Hook
  const location = useLocation();

  // Set UseState Hooks
  const [transitionAnimationFrom, setTransitionAnimationFrom] = useState(null);
  const [transitionAnimationTo, setTransitionAnimationTo] = useState(null);
  const [isTransitionCompleted, setIsTransitionCompleted] = useState(true);

  // Set UseMeasure Hooks
  const [ref, bounds] = useMeasure();

  // Set Context Values
  const value = {
    clientWidth: bounds.width,
    clientHeight: bounds.height,

    boardHeight: ((bounds.width - 24) / 3) * 2 + 24,

    transitionAnimationFrom,
    setTransitionAnimationFrom,
    transitionAnimationTo,
    setTransitionAnimationTo,
    isTransitionCompleted,
    setIsTransitionCompleted,
  };

  return (
    <mobileLayoutContext.Provider value={value}>
      <div ref={ref} className="fixed inset-0">
        <motion.div
          ref={ref}
          style={{
            height: '80%',
            backgroundColor:
              location.pathname === '/'
                ? 'rgba(253, 224, 71, 0.75)'
                : 'rgb(15 23 42)',
          }}
          animate={{
            backgroundColor:
              location.pathname === '/'
                ? 'rgba(253, 224, 71, 0.75)'
                : 'rgb(15 23 42)',
          }}
          transition={{ duration: 0.25 }}
        />

        <HeaderA />
        <Suspense>{useRoutes(mobileRoutes)}</Suspense>

        {!isTransitionCompleted && (
          <motion.div
            className="absolute inset-x-0 bottom-0 rounded-t-2xl bg-white"
            style={{ top: transitionAnimationFrom }}
            animate={{ top: transitionAnimationTo }}
            transition={{ duration: 0.25 }}
            onAnimationComplete={() => setIsTransitionCompleted(true)}
          />
        )}
      </div>
    </mobileLayoutContext.Provider>
  );
};

export default MobileLayout;
