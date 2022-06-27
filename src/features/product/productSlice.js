import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../utils/utils";

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.unshift(action.payload);
    },
    editProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product._id === action.payload.product._id
          ? action.payload.product
          : product
      );
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload.product._id
      );
    },
    toggleView: (state) => {
      state.gridView = !state.gridView;
    },
    changePriceRange: (state, action) => {
      state.priceFilter = action.payload;
    },
    changeRamRange: (state, action) => {
      state.ramFilter = action.payload;
    },
    changeMemoryRange: (state, action) => {
      state.memoryFilter = action.payload;
    },
    editBrandFilter: (state, action) => {
      if (action.payload.isChecked) {
        state.brandFilter.push(action.payload.brand);
      } else {
        const index = state.brandFilter.indexOf(action.payload.brand);
        state.brandFilter.splice(index, 1);
      }
    },
  },
});

export const {
  addProduct,
  editProduct,
  deleteProduct,
  toggleView,
  changePriceRange,
  changeRamRange,
  changeMemoryRange,
  editBrandFilter,
} = productSlice.actions;

export default productSlice.reducer;
