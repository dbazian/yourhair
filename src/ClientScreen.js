import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import ClientItem from "./components/ClientItem";
import { useSelector, useDispatch } from "react-redux";

const ClientScreen = (props) => {
  const clientData = useSelector((state) => state.clientData.clientList);

  return (
    <View style={styles.full}>
      <FlatList
        data={clientData}
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
