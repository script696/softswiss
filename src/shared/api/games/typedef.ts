export type GameId = string;

type Currency = Record<string, { id: number }>;

export interface GameApiModel {
  title: string;
  provider: string;
  real: Currency;
}
