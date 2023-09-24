import { GameApiModel } from "@shared/api/games/typedef";
import { GetAllGamesResponseDto } from "@shared/api/games/dto/GetAllGamesDto";

export type GameViewModel = GameApiModel;

export type AllGamesViewModel = GetAllGamesResponseDto;

export type Currency = Record<string, { id: number }>;
