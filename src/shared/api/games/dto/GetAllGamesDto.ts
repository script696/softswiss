import { GameApiModel, GameId } from "../typedef";

export type GetAllGamesResponseDto = Record<GameId, GameApiModel>;
