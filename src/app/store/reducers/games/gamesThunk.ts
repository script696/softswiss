import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsThunk = createAsyncThunk<any>(
  "games/get",
  async (reqParams, thunkAPI) => {
    try {
      // const { data } = await GameService.getProducts();
      // const mappedResData = ApiToViewModelMapper.getProducts(data);
      // return mappedResData;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
