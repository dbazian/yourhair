import React from "react";
import { View, Button } from "react-native";

const ClientSearchScreen = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate("Clients")} title="Search"></Button>
    </View>
  );
};

export default ClientSearchScreen;
