import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Name from "../components/Name";
import ClientItem from "../components/ClientItem";
import { getClients } from "../../store/actions/clientListActions";
import Colors from "../../constants/Colors";

const SearchScreen = () => {
  const clientData = useSelector((state) => state.clientList.clientList);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = () => {
    setIsLoading(true);
    dispatch(getClients());
    setIsLoading(false);
  };

  return (
    <View style={styles.full}>
      <View style={styles.section}>
        <Name />
      </View>
      <View style={styles.full2}>
        <FlatList
          data={clientData}
          refreshing={isLoading}
          onRefresh={fetchClients}
          keyExtractor={(item) => item.key}
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
    backgroundColor: Colors.text,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 100,
  },
  full2: {
    height: "75%",
    width: "90%",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    color: Colors.text,
  },
});

export default SearchScreen;
