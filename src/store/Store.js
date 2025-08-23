import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductSlice'
 import cartReducer from "./CartSlice"
 import ProductDetailReducer from './ProductDetailSlice'
export const store = configureStore({
  reducer: {
   
    productlist:ProductReducer,
    cart:cartReducer,
    productdetail:ProductDetailReducer
  },
});
export default store