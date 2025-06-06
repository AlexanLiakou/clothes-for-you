import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemInterface } from "../interfaces";

const CartItem : CartItemInterface[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState: CartItem,
  reducers:{
    add(state,action: PayloadAction<CartItemInterface>) {
      state.push(action.payload);
    }
  }
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;