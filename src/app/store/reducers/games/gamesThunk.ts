import { createAsyncThunk } from "@reduxjs/toolkit";
import { GameViewModel } from "@app/store/reducers/games/types/typedef";

export const getProductsThunk = createAsyncThunk<GameViewModel>(
  "games/get",
  async (reqParams, thunkAPI) => {
    try {
      // const { data } = await GameService.getProducts();
      // const mappedResData = ApiToViewModelMapper.getProducts(data);
      // return mappedResData;
    } catch (e) {
      return thunkAPI.rejectWithValue("Неизвестная ошибка");
    }
  }
);
