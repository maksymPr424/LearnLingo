import { createSelector } from "@reduxjs/toolkit";
import {
  selectLanguageFilter,
  selectLevelFilter,
  selectPriceFilter,
} from "../filters/selectors";

import { selectFavoriteTeachersIds } from "../auth/selectors";

export const selectIsLoading = (state) => state.teachers.isLoading;
export const selectTotal = (state) => state.teachers.total;
export const selectTeachers = (state) => state.teachers.teachers;
export const selectPerPage = (state) => state.teachers.perPage;
export const selectPage = (state) => state.teachers.page;

export const selectTeachersWithFilters = createSelector(
  selectTeachers,
  selectLanguageFilter,
  selectLevelFilter,
  selectPriceFilter,
  (teachers, language, level, price) => {
    console.log(teachers);

    return teachers.filter(({ languages, levels, price_per_hour }) => {
      if (
        languages.includes(language) &&
        levels.includes(level) &&
        price_per_hour <= price
      ) {
        return true;
      }
    });
  }
);

export const selectFavoriteTeachers = createSelector(
  selectTeachers,
  selectFavoriteTeachersIds,
  (teachers, ids) => {
    return teachers.filter((item) => ids.includes(item));
  }
);
