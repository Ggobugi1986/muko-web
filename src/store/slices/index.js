// Import Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit';

// Import Reducers
import appReducer from './appSlice';

const createRootReducer = (lazyReducers) => {
  const rootReducer = combineReducers({
    app: appReducer,
    ...lazyReducers,
  });

  return rootReducer;
};

export default createRootReducer;
