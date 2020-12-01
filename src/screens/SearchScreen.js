import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Name from "../components/Name";
import ClientItem from "../components/ClientItem";
import { getClients } from "../../store/actions/clientListActions";
import Colors from "../../constants/Colors";
import { PulseIndicator } from "react-native-indicators";

const SearchScreen = () => {
  const clientData = useSelector(state => state.clientSort.clientList);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadClients = async () => {
      setIsLoading(true);
      await dispatch(getClients());
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    loadClients();
  }, []);

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

  if (clientData.length === 0) {
    return (
      <View style={styles.fullEmpty}>
        <Text style={styles.text}>You haven't added any clients.</Text>
        <Button title="Refresh" onPress={() => dispatch(getClients())}></Button>
      </View>
    );
  }

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

export default SearchScreen;
