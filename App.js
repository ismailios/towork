import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import MealsNavigation from "./navigation/MealsNavigation";
import { mealsReducer } from "./store/reducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MealsNavigation />
    </Provider>
  );
}
