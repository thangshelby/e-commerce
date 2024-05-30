import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { productType } from "../../types";

interface CartState {
  products: Array<{
    productInfo: productType;
    productStatus: { quantity: number; status: string; size: string };
  }>;
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      state.products.push(action.payload);
    },

  },
});

export const { addProduct} = cartSlice.actions;

export default cartSlice.reducer;
