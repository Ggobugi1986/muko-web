// Import React
import React, { useContext } from 'react';

// Import Contexts
import { mobileLayoutContext } from 'contexts';

const PaperA = ({ children }) => {
  // Set UseContext Hooks
  const { isTransitionCompleted } = useContext(mobileLayoutContext);

  return (
    isTransitionCompleted && (
      <>
        <div className="flex-none sticky top-0 h-4 rounded-t-2xl bg-white" />
        <div className="flex-1 bg-white">{children}</div>
      </>
    )
  );
};

export default PaperA;
