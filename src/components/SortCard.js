import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Colors from "../../constants/Colors";

const SortCard = props => {
  return (
    <View style={styles.aroundCards}>
      <TouchableOpacity
        style={[styles.outerCard, props.style]}
        onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
        <FontAwesomeIcon icon={props.iconName} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  aroundCards: {
    padding: 10,
  },
  outerCard: {
    height: 150,
    width: 150,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 2,
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    elevation: 1,
    shadowOpacity: 1,
    padding: 8,
  },
  text: {
    marginBottom: 10,
  },
});

export default SortCard;
