import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";

const store=configureStore({
  reducer:{
    cart:cartSlice.reducer,
    cartUi:cartSlice.reducer
  },
})
export default store