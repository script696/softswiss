import { GameApiModel, GameId } from "../typedef";

export type GetGameRequestDto = { id: string };

export type GetGameResponseDto = Record<GameId, GameApiModel>;
