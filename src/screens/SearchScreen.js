import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getClients } from "../../store/actions/clientListActions";
import { PulseIndicator } from "react-native-indicators";
import Colors from "../../constants/Colors";
import Name from "../components/Name";
import ClientItem from "../components/ClientItem";

const SearchScreen = ({ navigation }) => {
  const clientData = useSelector(state => state.clientSort.clientList);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadScreen = async () => {
      await navigation.addListener("focus", () => {
        setIsLoading(true);
        dispatch(getClients());
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
    };
    loadScreen();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.fullEmpty}>
        <PulseIndicator color={Colors.primary} size={100} />
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
      <View style={styles.input}>
        <Name />
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={clientData}
          refreshing={isLoading}
          onRefresh={() => dispatch(getClients())}
          keyExtractor={item => item.key}
          renderItem={itemData => <ClientItem items={itemData.item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullEmpty: {
    backgroundColor: "black",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  full: {
    backgroundColor: "black",
    height: "100%",
  },
  input: {
    marginTop: 30,
    marginBottom: 100,
    width: "100%",
  },
  flatList: {
    height: "79%",
    width: "100%",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: Colors.alt2,
  },
});

export default SearchScreen;
