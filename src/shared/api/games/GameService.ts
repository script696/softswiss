import { $apiClient } from "../client";
import { GetAllGamesResponseDto } from "src/shared/api/games/dto/GetAllGamesDto";

export class GameService {
  static getAllGames() {
    return $apiClient.get<GetAllGamesResponseDto>("product/get");
  }
}
