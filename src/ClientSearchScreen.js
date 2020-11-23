import React, { useState, useEffect } from "react";
import { View, Button, Text, TouchableOpacity, StyleSheet } from "react-native";
import LastAppointment from "./components/searchComponents/LastAppointment";

const ClientSearchScreen = ({ navigation }) => {
  return (
    <View style={styles.full}>
      <LastAppointment />
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    backgroundColor: "pink",
    height: "100%",
    alignItems: "center",
  },
});

export default ClientSearchScreen;
