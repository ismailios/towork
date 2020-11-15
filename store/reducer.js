import { MEALS } from "../data/dummy-data";
import { APPLY_FILTERS, TOOGLE_FAV } from "./actions";

const initialState = {
  meals: MEALS,
  favorites: [],
  filtredMeals: MEALS,
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_FAV:
      const existingMeal = state.favorites.findIndex(
        (meal) => meal.id === action.mealId
      );

      const updatedFavorite = [...state.favorites];

      if (existingMeal >= 0) {
        updatedFavorite.splice(existingMeal, 1);
        return {
          ...state,
          favorites: updatedFavorite,
        };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favorites: state.favorites.concat(meal),
        };
      }
    case APPLY_FILTERS:
      const appliedFilters = action.appliedFilters;

      const updatedFiltredMeals = state.filtredMeals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });

      return {
        ...state,
        filtredMeals: updatedFiltredMeals,
      };

    default:
      return state;
  }
};
