import s from "@pages/GamesGallery/styles/GamesGallery.module.scss";
import { GamesList } from "@widgets/GamesList";

const GamesGallery = () => {
  return (
    <div className={s["games-gallery"]}>
      <h2 className={s["games-gallery__title"]}>GamesGallery</h2>
      <GamesList />
    </div>
  );
};

export default GamesGallery;
