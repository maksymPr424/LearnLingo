import { createSelector } from "@reduxjs/toolkit";

export const selectLanguageFilter = (state) => state.filters.language;
export const selectLevelFilter = (state) => state.filters.level;
export const selectPriceFilter = (state) => state.filters.price;
export const selectFilters = createSelector(
  selectLanguageFilter,
  selectLevelFilter,
  selectPriceFilter,
  (language, level, price) => {
    return { language, level, price };
  }
);
