import { configureStore } from '@reduxjs/toolkit';
import SnackbarReducer from './features/SnackbarSlice';

const store = configureStore({
  reducer: {
    snackbarReducer: SnackbarReducer,
  },
});

export default store;
