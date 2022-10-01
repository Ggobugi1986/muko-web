// Import Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit';

// Import Reducers
import uiReducer from './uiSlice';

const portalReducer = combineReducers({
  ui: uiReducer,
});

export default portalReducer;
