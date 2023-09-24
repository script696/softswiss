import s from "../styles/Game.module.scss";
import { Button } from "@shared/components/Button/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES_GAMES } from "@app/providers/AppRouter/constants/routes";

const Game = () => {
  const navigate = useNavigate();

  const handleNavigateMain = () => {
    navigate(ROUTES_GAMES.GAMES);
  };
  return (
    <div className={s["game"]}>
      <Button onClick={handleNavigateMain}>На главную</Button>
      <div className={s["game__wrapper"]}>
        <h2 className={s["game__title"]}>Game</h2>
      </div>
    </div>
  );
};

export default Game;
