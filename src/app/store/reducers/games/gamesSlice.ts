import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllGamesThunk } from "./gamesThunk";
import {
  AllGamesViewModel,
  GameViewModel,
} from "@app/store/reducers/games/types/typedef";
import { getProvidersHelper } from "@app/store/reducers/games/helpers/getProvidersHelper";
import { getCurrenciesHelper } from "@app/store/reducers/games/helpers/getCurrenciesHelper";

export type ProductsState = {
  games: Array<[string, GameViewModel]>;
  uiGames: Array<[string, GameViewModel]>;
  page: number;
  cardsPerPage: number;
  isLoading: boolean;
  currencies: Record<string, { id: string }>;
  providers: Record<string, { id: string }>;
  error: string;
};

const initialState: ProductsState = {
  games: [],
  uiGames: [],
  page: 1,
  cardsPerPage: 12,
  isLoading: false,
  currencies: {},
  providers: {},
  error: "",
};

export const gamesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    goNextPage: (state) => {
      state.page = state.page + 1;
    },
    filterGamesByProvider: (state, { payload }: PayloadAction<string>) => {
      const filteredGames = state.games.filter(([, game]) => {
        return game.provider === payload;
      });
      state.page = 1;
      state.uiGames = filteredGames;
    },
    filterGamesByCurrency: (state, { payload }: PayloadAction<string>) => {
      const filteredGames = state.games.filter(([, game]) =>
        Object.keys(game.real).some((currency) => currency === payload)
      );
      state.page = 1;
      state.uiGames = filteredGames;
    },
  },
  extraReducers: {
    /* Get All games */

    [getAllGamesThunk.fulfilled.type]: (
      state,
      { payload }: PayloadAction<AllGamesViewModel>
    ) => {
      const currenciesHelper = getCurrenciesHelper();
      const providersHelper = getProvidersHelper();

      Object.values(payload).forEach(({ real, provider }) => {
        currenciesHelper.updateCurrencies(real);
        providersHelper.updateProviders(provider);
      });

      state.isLoading = false;
      state.error = "";
      state.games = Object.entries(payload);
      state.uiGames = Object.entries(payload);
      state.currencies = currenciesHelper.getCurrencies();
      state.providers = providersHelper.getProviders();
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
