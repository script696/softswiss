import s from "../styles/Game.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES_GAMES } from "@app/providers/AppRouter/constants/routes";
import { useGameRdx } from "@pages/Game/hooks/useGameRdx";
import { Button } from "@mui/material";

const Game = () => {
  const navigate = useNavigate();
  const { game } = useGameRdx();

  const handleNavigateMain = () => {
    navigate(ROUTES_GAMES.GAMES);
  };
  return (
    <div className={s["game"]}>
      <Button onClick={handleNavigateMain} variant={"contained"}>
        На главную
      </Button>
      <div className={s["game__wrapper"]}>
        <h2 className={s["game__title"]}>{game?.title}</h2>
      </div>
    </div>
  );
};

export default Game;
