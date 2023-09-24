import s from "../styles/GamesList.module.scss";
import mocks from "@shared/mocks/games.json";
import { GameCard } from "@features/GameCard";

const GamesList = () => {
  const gamesList = Object.entries(mocks).slice(0, 12);

  return (
    <ul className={s["games-list"]}>
      {gamesList.map(([gameId, game], idx) => {
        const data = { gameId, game };
        return <GameCard key={idx} data={data} />;
      })}
    </ul>
  );
};

export default GamesList;
