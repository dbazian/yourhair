import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ClientCard = (props) => {
  return (
    <View style={styles.aroundCards}>
      <TouchableOpacity style={[styles.outerCard, props.style]}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  aroundCards: {
    padding: 10,
  },
  outerCard: {
    borderColor: "white",
    height: 150,
    width: 150,
    backgroundColor: "#59a19f",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ClientCard;
