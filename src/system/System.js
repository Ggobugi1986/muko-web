// Import React
import React, { useState } from 'react';

// Import React-Router-Dom
import { BrowserRouter } from 'react-router-dom';

// Import React-Redux
import { Provider } from 'react-redux';

// Import Contexts
import { systemContext } from 'contexts';

// Import Store
import store from 'store';

const System = ({ children }) => {
  // Set UseState Hooks
  const [appBarTitle, setAppBarTitle] = useState('');

  // Set Context Values
  const value = { appBarTitle, setAppBarTitle };

  return (
    <BrowserRouter>
      <Provider store={store}>
        <systemContext.Provider value={value}>
          {children}
        </systemContext.Provider>
      </Provider>
    </BrowserRouter>
  );
};

export default System;
