import s from "../styles/GamesFilters.module.scss";
import { Dropdown } from "@shared/components/Dropdown";
import { FC } from "react";

type FilterItem = { id: string; label: string };

type GamesFiltersProps = {
  currencies: Array<FilterItem>;
  providers: Array<FilterItem>;
  onFilterProvider: (id: string) => void;
  onFilterByCurrency: (id: string) => void;
};

const GamesFilters: FC<GamesFiltersProps> = ({
  currencies,
  providers,
  onFilterProvider,
  onFilterByCurrency,
}) => {
  return (
    <div className={s["games-filters"]}>
      <Dropdown
        title={"Валюта"}
        items={currencies}
        onItemClick={onFilterByCurrency}
      />
      <Dropdown
        title={"Провайдер"}
        items={providers}
        onItemClick={onFilterProvider}
      />
    </div>
  );
};

export default GamesFilters;
