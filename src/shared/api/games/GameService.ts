import mocks from "@shared/mocks/games.json";
import { GetGameRequestDto } from "@shared/api/games/dto/GetGameDto";
import { GameApiModel, GameId } from "@shared/api/games/typedef";

class MockApiClient {
  static getAllGames() {
    return Promise.resolve({ data: mocks });
  }

  static getGame({ id }: GetGameRequestDto) {
    const game = (mocks as Record<GameId, GameApiModel>)[id];
    return Promise.resolve({ data: game });
  }
}

export class GameService {
  static getAllGames() {
    return MockApiClient.getAllGames();
  }

  static getGame(reqData: GetGameRequestDto) {
    return MockApiClient.getGame(reqData);
  }
}
