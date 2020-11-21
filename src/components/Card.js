import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 3,
    marginVertical: 5,
    width: "100%",
    flexDirection: "row",
    padding: 10,
    shadowColor: "white",
    shadowOffset: { width: 1.5, height: 1 },
    borderRadius: 12,
    backgroundColor: "white",
  },
});

export default Card;
