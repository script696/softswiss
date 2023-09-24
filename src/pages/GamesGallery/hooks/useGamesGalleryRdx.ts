import { useAppDispatch, useAppSelector } from "@app/store";
import { useEffect, useMemo } from "react";
import { getAllGamesThunk } from "@app/store/reducers/games/gamesThunk";
import { gamesSlice } from "@app/store/reducers/games/gamesSlice";

export const useGamesGalleryRdx = () => {
  const dispatch = useAppDispatch();
  const { uiGames, page, cardsPerPage, currencies, providers } = useAppSelector(
    (state) => state.gamesReducer
  );
  const { goNextPage, filterGamesByProvider, filterGamesByCurrency } =
    gamesSlice.actions;

  const handleShowMore = () => {
    dispatch(goNextPage());
  };

  const handleFilterByProvider = (id: string) => {
    dispatch(filterGamesByProvider(id));
  };

  const handleFilterByCurrency = (id: string) => {
    dispatch(filterGamesByCurrency(id));
  };

  const gamesPart = useMemo(() => {
    return uiGames.slice(0, page * cardsPerPage);
  }, [page, uiGames]);

  const mappedCurrencies = useMemo(() => {
    return Object.entries(currencies).map(([label, value]) => ({
      id: value.id,
      label,
    }));
  }, [currencies]);

  const mappedProviders = useMemo(() => {
    return Object.entries(providers).map(([label, value]) => ({
      id: value.id,
      label,
    }));
  }, [providers]);

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, []);

  return {
    gamesPart,
    handleShowMore,
    currencies: mappedCurrencies,
    providers: mappedProviders,
    handleFilterByProvider,
    handleFilterByCurrency,
  };
};
