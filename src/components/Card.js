import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Card = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.secondary,
    borderWidth: 3,
    marginVertical: 5,
    width: "100%",
    flexDirection: "row",
    padding: 10,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 1.5, height: 1 },
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
});

export default Card;
