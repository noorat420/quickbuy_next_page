import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  product:{},
  inProgress: false,
  error: null,
};

// Async thunk to fetch products
export const fetchProduct = createAsyncThunk(
  "product/fetchNewProduct",
  async (id) => {
    const response = await fetch("https://fakestoreapi.com/products/" + id);
;
    const data = await response.json();
    return data;
  }
);

export const ProductDetailSlice = createSlice({
  name: "productdetail",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.inProgress = true;
        state.product = {};
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.inProgress = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.inProgress = false;
        state.error = action.error.message;
      });
  },
});

export default ProductDetailSlice.reducer;
