import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const MealItem = (props) => {
  return (
    <TouchableOpacity style={styles.screen} onPress={props.onSelect}>
      <ImageBackground
        style={styles.image}
        source={{ uri: props.data.imageUrl }}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{props.data.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.rowInfo}>
        <Text>{props.data.duration}min</Text>
        <Text>{props.data.affordability.toUpperCase()}</Text>
        <Text>{props.data.complexity.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginBottom: 15,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  textWrapper: {
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    padding: 15,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
  },
  rowInfo: {
    backgroundColor: "#e1e1e1",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default MealItem;
