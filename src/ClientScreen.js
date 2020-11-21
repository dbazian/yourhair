import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import clientList from "../data/clientList";
import ClientItem from "./components/ClientItem";

const ClientScreen = (props) => {
  return (
    <View style={styles.full}>
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
    height: "100%",
    backgroundColor: "pink",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default ClientScreen;
