import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MOCK_PRODUCTS } from '../data/mock-products.data';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_PRODUCTS);
    }, 500);
  });
});

const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
export const selectProducts = (state) => state.products.items;
export const selectLoading = (state) => state.products.loading;
