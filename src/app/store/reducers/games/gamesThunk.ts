import { createAsyncThunk } from "@reduxjs/toolkit";
import { GameService } from "@shared/api/games/GameService";
import { GetAllGamesResponseDto } from "@shared/api/games/dto/GetAllGamesDto";
import { GetGameRequestDto } from "@shared/api/games/dto/GetGameDto";
import { GameViewModel } from "@app/store/reducers/games/types/typedef";

export const getAllGamesThunk = createAsyncThunk<GetAllGamesResponseDto>(
  "games/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await GameService.getAllGames();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Неизвестная ошибка");
    }
  }
);

export const getGameThunk = createAsyncThunk<GameViewModel, GetGameRequestDto>(
  "games/get",
  async (reqData, thunkAPI) => {
    try {
      const { data } = await GameService.getGame(reqData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Неизвестная ошибка");
    }
  }
);
