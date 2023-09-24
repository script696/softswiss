import { useAppDispatch, useAppSelector } from "@app/store";
import { useEffect, useMemo } from "react";
import { getAllGamesThunk } from "@app/store/reducers/games/gamesThunk";
import { gamesSlice } from "@app/store/reducers/games/gamesSlice";

export const useGamesGalleryRdx = () => {
  const dispatch = useAppDispatch();
  const { games, page, cardsPerPage } = useAppSelector(
    (state) => state.gamesReducer
  );

  const { goNextPage } = gamesSlice.actions;

  const handleShowMore = () => {
    dispatch(goNextPage());
  };

  const gamesPart = useMemo(() => {
    return Object.entries(games).slice(0, page * cardsPerPage);
  }, [page, games]);

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, []);

  return { gamesPart, handleShowMore };
};
