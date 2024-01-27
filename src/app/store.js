import productReducer from '../features/product/productSlice'
import authReducer from '../features/user/userSlice'
import { configureStore } from '@reduxjs/toolkit'



export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
