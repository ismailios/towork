import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CategorieGrid from "../components/CategorieGrid";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <FlatList
        numColumns="2"
        data={CATEGORIES}
        renderItem={(dataItem) => (
          <CategorieGrid
            id={dataItem.item.id}
            title={dataItem.item.title}
            color={dataItem.item.color}
            onSelect={() =>
              props.navigation.navigate("CategoryMealsScreen", {
                categoryId: dataItem.item.id,
                categoryTitle: dataItem.item.title,
              })
            }
          />
        )}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Categories Screen",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            iconName="ios-menu"
            iconSize={30}
            onPress={() => navData.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default CategoriesScreen;
