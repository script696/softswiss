import "./styles/index.scss";
import { getClassNames } from "@shared/utils/getClassNames/getClassNames";
import { AppRouter } from "@app/providers/AppRouter";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className={getClassNames("app", {}, [])}>
      <Suspense fallback={<div />}>
        <AppRouter />
      </Suspense>
    </div>
  );
};
