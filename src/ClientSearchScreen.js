import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import LastAppointment from "./components/searchComponents/LastAppointment";
import Name from "./components/searchComponents/Name";

const ClientSearchScreen = (props, { navigation }) => {
  return (
    <View style={styles.full}>
      <View style={styles.section}>
        <Name />
      </View>
      <View style={styles.section}>
        <LastAppointment />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    backgroundColor: "pink",
    height: "100%",
    alignItems: "center",
  },
  section: {
    backgroundColor: "white",
    alignItems: "center",
    marginVertical: 50,
  },
});

export default ClientSearchScreen;
