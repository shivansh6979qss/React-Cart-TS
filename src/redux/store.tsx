import { configureStore } from '@reduxjs/toolkit';
import SnackbarReducer from './features/SnackbarSlice';
import CartReducer from './features/CartSlice';

const store = configureStore({
  reducer: {
    Snackbar: SnackbarReducer,
    Cart: CartReducer,
  },
});

export default store;
