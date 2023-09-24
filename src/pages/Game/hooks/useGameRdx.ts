import { useAppDispatch, useAppSelector } from "@app/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGameThunk } from "@app/store/reducers/games/gamesThunk";
import { convertUrlPath } from "@shared/utils";

export const useGameRdx = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { game } = useAppSelector((state) => state.gamesReducer);

  useEffect(() => {
    if (!params.id) return;
    const gameId = convertUrlPath(params.id, "fromUrl");

    dispatch(getGameThunk({ id: gameId }));
  }, []);

  return { game };
};
