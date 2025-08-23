import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  inProgress: false,
  error: null,
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchNewProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

export const ProductSlice = createSlice({
  name: "productlist",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.inProgress = true;
        state.products = [];
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.inProgress = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.inProgress = false;
        state.error = action.error.message;
      });
  },
});

export default ProductSlice.reducer;
