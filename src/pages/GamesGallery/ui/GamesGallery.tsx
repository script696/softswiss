import s from "@pages/GamesGallery/styles/GamesGallery.module.scss";
import { GamesList } from "@widgets/GamesList";
import { useGamesGalleryRdx } from "@pages/GamesGallery/hooks/useGamesGalleryRdx";
import { Button } from "@shared/components/Button/Button";
import { GamesFilters } from "@widgets/GamesFilters";

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
      <Button onClick={handleShowMore}>Показать еще</Button>
    </div>
  );
};

export default GamesGallery;
