import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const ViewScreen = (props) => {
  const clientData = useSelector((state) => state.clientData.clientList);

  return (

  );
};

const styles = StyleSheet.create({
  full: {
    height: "100%",
    backgroundColor: "pink",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default ViewScreen;
