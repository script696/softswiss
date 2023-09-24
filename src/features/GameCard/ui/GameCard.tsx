import s from "../styles/GameCard.module.scss";
import { FC } from "react";
import { getStaticUrl } from "@shared/utils";
import { GameViewModel } from "@app/store/reducers/games/types/typedef";
import { Link } from "react-router-dom";

type GameCardProps = {
  data: { gameId: string; game: Pick<GameViewModel, "title"> };
};

const GameCard: FC<GameCardProps> = ({ data }) => {
  const { gameId, game } = data;
  const imgUrl = getStaticUrl(gameId);
  const pathToRedirect = gameId.split("/")[1];

  return (
    <article className={s["game-card"]}>
      <Link to={`/games/${pathToRedirect}`} replace>
        <img
          src={imgUrl}
          className={s["game-card__avatar"]}
          alt={"Game avatar"}
        />
      </Link>
      <h3 className={s["game-card__title"]}>{game.title}</h3>
    </article>
  );
};

export default GameCard;
