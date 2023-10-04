import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productListSlice";
import cartReducer from "../features/cart/cartSlice";

import authReducer from "../features/auth/authSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
