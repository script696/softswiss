import s from "@pages/GamesGallery/styles/GamesGallery.module.scss";
import { GamesList } from "@widgets/GamesList";
import { useGamesGalleryRdx } from "@pages/GamesGallery/hooks/useGamesGalleryRdx";
import { GamesFilters } from "@widgets/GamesFilters";
import { Button } from "@mui/material";

const GamesGallery = () => {
  const {
    gamesPart,
    handleShowMore,
    currencies,
    providers,
    handleFilterByProvider,
    handleFilterByCurrency,
  } = useGamesGalleryRdx();
  return (
    <div className={s["games-gallery"]}>
      <h2 className={s["games-gallery__title"]}>GamesGallery</h2>
      <GamesFilters
        currencies={currencies}
        providers={providers}
        onFilterProvider={handleFilterByProvider}
        onFilterByCurrency={handleFilterByCurrency}
      />
      <GamesList data={gamesPart} />
      <Button onClick={handleShowMore} variant={"contained"}>
        Показать еще
      </Button>
    </div>
  );
};

export default GamesGallery;
