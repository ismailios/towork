import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const FavoritesMealsScreen = () => {
  const favoriteMeals = useSelector((state) => state.meals.favorites);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          No Fav Meal Founded !!!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteMeals}
      renderItem={(itemData) => <MealItem data={itemData.item} />}
    />
  );
};

FavoritesMealsScreen.navigationOptions = () => {
  return {
    headerTitle: "Favorites Meals",
  };
};

const styles = StyleSheet.create({
  screen: { justifyContent: "center", alignItems: "center", flex: 1 },
});
export default FavoritesMealsScreen;
