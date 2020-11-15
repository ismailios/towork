import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CategorieGrid = ({ title, color, id, onSelect }) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={{ ...styles.grid, backgroundColor: color }}
        onPress={onSelect}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  grid: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2.2,

    elevation: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
  },
});

export default CategorieGrid;
