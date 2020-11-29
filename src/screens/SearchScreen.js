import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Name from "../components/Name";
import ClientItem from "../components/ClientItem";
import { getClients } from "../../store/actions/clientListActions";

const SearchScreen = () => {
  const clientData = useSelector((state) => state.clientList.clientList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
  }, []);
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
    backgroundColor: "black",
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
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    color: "pink",
  },
});

export default SearchScreen;
