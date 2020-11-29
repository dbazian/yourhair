import React from "react";
import { Text, View } from "react-native";
import Card from "./Card";

const ClientItem = (props) => {
  return (
    <View>
      <Card>
        <View>
          <Text>First Name: {props.items.firstName}</Text>
          <Text>Last Name: {props.items.lastName}</Text>
          <Text>Phone Number: {props.items.phoneNumber}</Text>
          <Text>Address: {props.items.address}</Text>
          <Text>City: {props.items.city}</Text>
          <Text>Email Adress: {props.items.emailAdress}</Text>
        </View>
      </Card>
    </View>
  );
};

export default ClientItem;
