import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ClientScreen = (props) => {
  return (
    <View style={styles.full}>
      <Text>ClientScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    height: "100%",
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ClientScreen;
