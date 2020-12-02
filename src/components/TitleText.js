import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const TitleText = props => {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.alt,
    fontSize: 25,
    marginBottom: 5,
  },
  centered: {
    width: "100%",
    alignItems: "center",
  },
});

export default TitleText;
