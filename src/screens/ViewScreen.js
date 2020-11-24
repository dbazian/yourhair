import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import LastAppointment from "../components/searchComponents/LastAppointment";
import Name from "../components/searchComponents/Name";
import { useSelector, useDispatch } from "react-redux";
import ClientItem from "../components/ClientItem";

const ViewScreen = (props, { navigation }) => {
  const clientData = useSelector((state) => state.clientData.clientList);

  return (
    <View style={styles.full}>
      <View style={styles.section}>
        <Name />
      </View>
      <View style={styles.section}></View>
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
    marginVertical: 50,
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
