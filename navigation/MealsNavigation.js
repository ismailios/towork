import React from "react";
import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FiltersScreen from "../screens/FiltersScreen";
import DetailsMealScreen from "../screens/DetailsMealScreen";
import FavoritesMealsScreen from "../screens/FavoritesMealsScreen";

import AuthScreen from "../screens/AuthScreen";

import { Ionicons } from "@expo/vector-icons";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: "#343333",
    height: 100,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
const mealsNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
    CategoriesScreen: CategoriesScreen,
    CategoryMealsScreen: CategoryMealsScreen,
    DetailsMealScreen: DetailsMealScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    FavoritesMealsScreen: FavoritesMealsScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const FiltersNavigator = createStackNavigator(
  {
    FiltersScreen: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const mealsTabsNavigator = createBottomTabNavigator({
  Meals: {
    screen: mealsNavigator,
    navigationOptions: ({ color }) => {
      return {
        tabBarLabel: "Meals !!",
        tabBarIcon: () => (
          <Ionicons name="ios-restaurant" size={30} color={color} />
        ),
      };
    },
  },
  Favorite: {
    screen: FavoritesNavigator,
    navigationOptions: ({ color }) => {
      return {
        tabBarLabel: "Favorite !!",
        tabBarIcon: () => <Ionicons name="ios-star" size={30} color={color} />,
      };
    },
  },
});

const DrawerNavigator = createDrawerNavigator({
  Meals: {
    screen: mealsTabsNavigator,
    navigationOptions: {
      drawerIcon: () => {
        return <Ionicons name="ios-restaurant" size={30} />;
      },
    },
  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: {
      drawerIcon: () => {
        return <Ionicons name="ios-switch" size={30} />;
      },
    },
  },
});

export default createAppContainer(DrawerNavigator);
