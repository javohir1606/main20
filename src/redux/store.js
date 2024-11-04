import { configureStore } from "@reduxjs/toolkit";
import productReduser from "./reducers/poroduct-reducer"

export const store = configureStore({
  reducer:{
    product: productReduser,
  }
})