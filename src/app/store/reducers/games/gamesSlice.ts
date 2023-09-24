import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProductsThunk } from "./gamesThunk";

export type ProductsState = {
  games: [];
  isLoading: boolean;
  error: string;
};

const initialState: ProductsState = {
  games: [],
  isLoading: false,
  error: "",
};

export const gamesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    /* Get All games */

    [getProductsThunk.fulfilled.type]: (
      state,
      { payload }: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.games = payload;
    },
    [getProductsThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProductsThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default gamesSlice.reducer;
