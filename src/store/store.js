// Import Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import Reducer
import createRootReducer from './slices';

const store = configureStore({
  reducer: createRootReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const lazyReducers = {};

export const withReducer = (name, lazyReducer) => (Component) => {
  lazyReducers[name] = lazyReducer;
  store.replaceReducer(createRootReducer(lazyReducers));

  return (props) => <Component {...props} />;
};

export default store;
