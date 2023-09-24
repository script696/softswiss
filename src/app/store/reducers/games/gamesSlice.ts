import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllGamesThunk } from "./gamesThunk";
import { AllGamesViewModel } from "@app/store/reducers/games/types/typedef";

export type ProductsState = {
  games: AllGamesViewModel;
  page: number;
  cardsPerPage: number;
  isLoading: boolean;
  error: string;
};

const initialState: ProductsState = {
  games: {},
  page: 1,
  cardsPerPage: 12,
  isLoading: false,
  error: "",
};

export const gamesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    goNextPage: (state) => {
      state.page = state.page + 1;
    },
  },
  extraReducers: {
    /* Get All games */

    [getAllGamesThunk.fulfilled.type]: (
      state,
      { payload }: PayloadAction<AllGamesViewModel>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.games = payload;
    },
    [getAllGamesThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllGamesThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default gamesSlice.reducer;
