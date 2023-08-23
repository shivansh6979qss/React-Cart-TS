import { createSlice } from '@reduxjs/toolkit';

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    isVisible: false,
  },
  reducers: {
    SnackBarVisible: (state) => {
      state.isVisible = true;
    },
    HideSnackbar: (state) => {
      state.isVisible = false;
    },
  },
});

export default snackbarSlice.reducer;
export const { SnackBarVisible, HideSnackbar } = snackbarSlice.actions;
