import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Name from "../components/Name";
import ClientItem from "../components/ClientItem";

const ViewScreen = () => {
  const clientData = useSelector((state) => state.clientData.clientList);

  return (
    <View style={styles.full}>
      <View style={styles.section}>
        <Name />
      </View>
      <View style={styles.full2}>
        <FlatList
          data={clientData}
          keyExtractor={(item) => item.index}
          renderItem={(itemData) => <ClientItem items={itemData.item} />}
        />
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
    marginTop: 50,
    marginBottom: 100,
  },
  full2: {
    height: "100%",
    width: "90%",
    backgroundColor: "pink",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default ViewScreen;
