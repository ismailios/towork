import React, { useCallback, useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import * as mealActions from "../store/actions";
const DetailsMealScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const meals = useSelector((state) => state.meals.meals);

  const selectedMeal = meals.find((meal) => meal.id === mealId);
  const currentFav = useSelector((state) => state.meals.favorites);

  const isFav = currentFav.some((cf) => cf.id === mealId);

  const dispatch = useDispatch();

  const handleFav = useCallback(() => {
    dispatch(mealActions.toogleFav(selectedMeal.id));
  }, [dispatch, selectedMeal.id]);

  useEffect(() => {
    props.navigation.setParams({
      handleFav: handleFav,
    });
  }, [handleFav]);

  useEffect(() => {
    props.navigation.setParams({
      isFav: isFav,
    });
  }, [isFav]);

  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={{ uri: selectedMeal.imageUrl }}
          style={styles.imageUrl}
        />

        <View style={styles.infos}>
          <Text style={styles.title}>Steps : </Text>
          {selectedMeal.steps.map((step, index) => (
            <Text key={index}>{step}</Text>
          ))}
        </View>
        <View style={styles.infos}>
          <Text style={styles.title}>ingredients : </Text>
          {selectedMeal.ingredients.map((ingredient, index) => (
            <Text key={index}>{ingredient}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

DetailsMealScreen.navigationOptions = (navData) => {
  const mealTitle = navData.navigation.getParam("mealTitle");
  const handleFav = navData.navigation.getParam("handleFav");
  const isFav = navData.navigation.getParam("isFav");
  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            iconName={isFav ? "ios-star" : "ios-star-outline"}
            color="white"
            onPress={handleFav}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  imageUrl: {
    width: "100%",
    height: 200,
  },
  infos: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginVertical: 10,
  },
});
export default DetailsMealScreen;
