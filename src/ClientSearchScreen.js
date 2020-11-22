import React, { useState, useEffect } from "react";
import { View, Button, Text, TouchableOpacity, StyleSheet } from "react-native";
import useDropdown from "./components/Dropdown";
import clientList from "../data/clientList";
import LastAppointment from "./components/searchComponents/LastAppointment";

const ClientSearchScreen = ({ navigation }) => {
  return (
    <View style={styles.full}>
      <LastAppointment />
      <Button onPress={() => navigation.navigate("Clients")} title="Search"></Button>
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
