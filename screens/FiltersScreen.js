import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ScrollView, Switch } from "react-native-gesture-handler";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as mealActions from "../store/actions";

const FilterSwitch = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch
        trackColor={{ true: "blue" }}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
    };
    dispatch(mealActions.applyFilters(appliedFilters));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree, dispatch]);

  const { navigation } = props;

  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);

  return (
    <ScrollView style={styles.screen}>
      <FilterSwitch
        label="Gluten Free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
      <FilterSwitch
        label="LactoseFree"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
    </ScrollView>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  const saveHandler = navData.navigation.getParam("save");

  return {
    headerTitle: "Filters",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            iconName="ios-menu"
            onPress={() => navData.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      );
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item iconName="ios-save" onPress={saveHandler} />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
  label: { fontSize: 18, fontWeight: "500" },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
export default FiltersScreen;
