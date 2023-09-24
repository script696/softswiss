import { Outlet } from "react-router-dom";
import s from "../styles/MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={s["main-layout"]}>
      <main className={s["main-layout__main"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
