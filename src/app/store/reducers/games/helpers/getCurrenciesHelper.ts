import { Currency } from "@app/store/reducers/games/types/typedef";

export const getCurrenciesHelper = () => {
  const currencies: Record<string, { id: string }> = {};

  const updateCurrencies = (real: Currency) => {
    const currencyTitles = Object.keys(real);
    currencyTitles.forEach((currency) => {
      if (currency in currencies) return;
      currencies[currency] = { id: currency };
    });
  };

  const getCurrencies = () => {
    return currencies;
  };

  return { updateCurrencies, getCurrencies };
};
