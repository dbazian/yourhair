import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ClientItem from "../components/ClientItem";
import { getClients } from "../../store/actions/clientListActions";
import Colors from "../../constants/Colors";
import { PulseIndicator } from "react-native-indicators";

const SortedScreen = () => {
  const clientData = useSelector(state => state.clientSort.filteredList);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const fetchClients = () => {
    dispatch(getClients());
  };

  if (isLoading) {
    return (
      <View style={styles.fullEmpty}>
        <PulseIndicator color={Colors.primary} size={75} />
      </View>
    );
  }

  return (
    <View style={styles.full}>
      <View style={styles.full2}>
        <FlatList
          data={clientData}
          refreshing={isLoading}
          onRefresh={fetchClients}
          keyExtractor={item => item.key}
          renderItem={itemData => <ClientItem items={itemData.item} />}
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
  fullEmpty: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  section: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 100,
    width: "100%",
  },
  full2: {
    height: "80%",
    width: "100%",
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderRadius: 10,
    backgroundColor: Colors.alt2,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    color: Colors.text,
  },
});

export default SortedScreen;
