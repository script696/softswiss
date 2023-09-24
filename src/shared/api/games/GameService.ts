import mocks from "@shared/mocks/games.json";

class MockApiClient {
  static getAllGames() {
    return Promise.resolve({ data: mocks });
  }
}

export class GameService {
  static getAllGames() {
    return MockApiClient.getAllGames();
  }
}
