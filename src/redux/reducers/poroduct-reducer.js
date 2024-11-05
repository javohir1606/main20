import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
  name: "product",
  initialState: {
    products: [],
    count: 0,
  },
  reducers: {
    addCart: (state, action) => {
      return { ...state, products: [...state.products, action.payload] };
    },
  },
});

export default productReducer.reducer;

export const { addCart } = productReducer.actions;
