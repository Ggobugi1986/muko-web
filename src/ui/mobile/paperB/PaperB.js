// Import React
import React, { useContext } from 'react';

// Import Contexts
import { mobileLayoutContext } from 'contexts';

const PaperB = ({ children }) => {
  // Set UseContext Hooks
  const { isTransitionCompleted } = useContext(mobileLayoutContext);

  return (
    isTransitionCompleted && (
      <div className="absolute inset-0 top-14 rounded-t-2xl bg-white">
        {children}
      </div>
    )
  );
};

export default PaperB;
