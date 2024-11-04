import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice ({
  name:"product",
  initialState:{
    products:[],
    count: 0,
  }
})


export default productReducer.reducer;

export const {} = productReducer.actions;