import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const meals = useSelector((state) => state.meals.filtredMeals);

  const availableMeals = meals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <MealList displayMeals={availableMeals} navigation={props.navigation} />
  );
};

CategoryMealsScreen.navigationOptions = (navData) => {
  const categoryTitle = navData.navigation.getParam("categoryTitle");
  return {
    headerTitle: categoryTitle,
  };
};

const styles = StyleSheet.create({});
export default CategoryMealsScreen;
