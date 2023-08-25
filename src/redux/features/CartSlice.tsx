import { createSlice } from '@reduxjs/toolkit';

type actionProps = {
  payload: payloadProps;
  type: String;
};

type payloadProps = {
  id: number;
  price: number;
};

const cartSlice = createSlice({
  name: 'CartiTEMS',
  initialState: {
    noOfItems: 0,
    items: [],
  },
  reducers: {
    addItems: (state, action: actionProps) => {
      console.log(action.payload);
      if (state.items.find((x: any) => x.id == action.payload.id) == null) {
        // state.items.push(Object.assign(action.payload, { quantity: 1 }));
        action.payload.quantity = 1;
        state.items.push(action?.payload);

        // state.items[action.payload.id] = quantity++;
        ++state.noOfItems;
      } else {
        state.items.map((x: any) => {
          console.log(x);
          if (x.id == action.payload.id) {
            ++x.quantity;
            ++state.noOfItems;
          }
        });
      }
    },
    removeItems: (state, action) => {
      --state.noOfItems;
      if (
        state.items.find((x: any) => x.id == action.payload.id)?.quantity === 1
      ) {
        state.items.splice(action.payload.id, 1);
        --state.noOfItems;
      } else if (
        state.items.find((x: any) => x.id == action.payload.id)?.quantity > 1
      ) {
        state.items.map((x: any) => x.id == action.payload.id);
        --state.noOfItems;
      } else {
        alert('No item to delete');
      }
    },

    removeAllItems: (state, action) => {
      const filteredValue = state.items.filter(
        (x: any) => x.id != action.payload.id
      );
      state.items = filteredValue;
      state.noOfItems;
    },
  },
});

export default cartSlice.reducer;
export const { addItems, removeItems, removeAllItems } = cartSlice.actions;
