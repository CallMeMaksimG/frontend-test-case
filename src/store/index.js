import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productsSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
