export const TOOGLE_FAV = "TOOGLE_FAV";

export const APPLY_FILTERS = "APPLY_FILTERS";

export const toogleFav = (mealId) => {
  return {
    type: TOOGLE_FAV,
    mealId: mealId,
  };
};

export const applyFilters = (appliedFilters) => {
  return {
    type: APPLY_FILTERS,
    appliedFilters: appliedFilters,
  };
};
