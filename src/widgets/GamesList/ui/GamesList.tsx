import s from "../styles/GamesList.module.scss";
import { GameCard } from "@features/GameCard";
import { FC } from "react";
import { GameViewModel } from "@app/store/reducers/games/types/typedef";

type GamesListProps = {
  data: Array<[string, GameViewModel]>;
};
const GamesList: FC<GamesListProps> = ({ data }) => {
  return (
    <ul className={s["games-list"]}>
      {data.map(([gameId, game], idx) => {
        const data = { gameId, game };
        return <GameCard key={idx} data={data} />;
      })}
    </ul>
  );
};

export default GamesList;
