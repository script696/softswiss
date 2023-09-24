import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "@shared/layouts/MainLayout";
import {
  ROUTES_BASE,
  ROUTES_GAMES,
} from "@app/providers/AppRouter/constants/routes";
import { GamesGallery } from "@pages/GamesGallery";
import { Game } from "@pages/Game";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES_GAMES.GAMES} element={<GamesGallery />} />
        <Route path={ROUTES_GAMES.GAME} element={<Game />} />
      </Route>
      <Route
        path="/"
        element={<Navigate to={`${ROUTES_GAMES.GAMES}`} replace />}
      />
      <Route
        path="*"
        element={<Navigate to={ROUTES_BASE.NOT_FOUND} replace />}
      />
    </Routes>
  );
};

export default AppRouter;
