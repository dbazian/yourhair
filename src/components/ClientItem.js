import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

const ClientItem = (props) => {
  return (
    <View>
      <Card>
        <View>
          <Text>First Name: {props.items.firstName}</Text>
          <Text>Last Name: {props.items.lastName}</Text>
          <Text>Last Appointment: {props.items.lastAppointment}</Text>
          <Text>Products: {props.items.products}</Text>
        </View>
      </Card>
    </View>
  );
};

export default ClientItem;
