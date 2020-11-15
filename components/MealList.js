import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "./MealItem";

const MealList = (props) => {
  const renderItemHandler = (dataItem) => {
    return (
      <MealItem
        data={dataItem.item}
        onSelect={() =>
          props.navigation.navigate("DetailsMealScreen", {
            mealId: dataItem.item.id,
            mealTitle: dataItem.item.title,
          })
        }
      />
    );
  };

  return <FlatList data={props.displayMeals} renderItem={renderItemHandler} />;
};

const styles = StyleSheet.create({});
export default MealList;
