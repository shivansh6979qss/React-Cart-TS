import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'CartiTEMS',
  initialState: {
    noOfItems: 0,
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      if (state.items.find((x: any) => x.id == action.payload.id) == null) {
        state.items.push(action.payload);
        state.items.quantity++;
        state.noOfItems++;
      } else {
        state.items.map((x: any) => {
          if (x.id == action.payload.id) {
            x.quantity++;
          }
        });
      }
    },
    removeItems: (state, action) => {
      state.noOfItems--;
      if (
        state.items.find((x: any) => x.id == action.payload.id)?.quantity === 1
      ) {
        state.items.splice(action.payload.id, 1);
      } else if (
        state.items.find((x: any) => x.id == action.payload.id)?.quantity > 1
      ) {
        state.items.map((x: any) => x.id == action.payload.id);
      } else {
        alert('No item to delete');
      }
    },

    removeAllItems: (state, action) => {
      const filteredValue = state.items.filter(
        (x: any) => x.id != action.payload.id
      );
      state.items = filteredValue;
    },
  },
});

export default cartSlice.reducer;
export const { addItems, removeItems, removeAllItems } = cartSlice.actions;
