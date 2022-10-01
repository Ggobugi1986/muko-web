// Import React
import { useContext } from 'react';

// Import Contexts
import { systemContext } from 'contexts';

const usePage = () => {
  // Set UseContext Hooks
  const { setAppBarTitle } = useContext(systemContext);

  const initializePage = (title) => {
    setAppBarTitle(title);
  };

  return initializePage;
};

export default usePage;
