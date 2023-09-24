import { createAsyncThunk } from "@reduxjs/toolkit";
import { GameService } from "@shared/api/games/GameService";
import { GetAllGamesResponseDto } from "@shared/api/games/dto/GetAllGamesDto";

export const getAllGamesThunk = createAsyncThunk<GetAllGamesResponseDto>(
  "games/get",
  async (_, thunkAPI) => {
    try {
      const { data } = await GameService.getAllGames();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Неизвестная ошибка");
    }
  }
);
