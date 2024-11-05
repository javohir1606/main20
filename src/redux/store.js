import { configureStore } from "@reduxjs/toolkit";
import productReduser from "./reducers/poroduct-reducer"

export const store = configureStore({
  reducer:{
    product: productReduser,
  },
  preloadedState:{
    // product:loadState("products")
  }
})

store.subscribe(() => {
  saveState('products', store.getState().product)
})