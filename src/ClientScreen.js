import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import clientList from "../data/clientList";
import ClientItem from "./components/ClientItem";

const ClientScreen = (props) => {
  return (
    <View style={styles.full}>
      <Text style={styles.text}>Clients</Text>
      <FlatList
        data={clientList}
        keyExtractor={(item) => item.index}
        renderItem={(itemData) => <ClientItem items={itemData.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    paddingVertical: 100,
    height: "100%",
    backgroundColor: "pink",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default ClientScreen;
