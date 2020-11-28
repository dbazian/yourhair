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
          <Text>Last Appointment: {props.items.lastAppointment}</Text>
          <Text>Products: {props.items.products}</Text>
          <Text>address: {props.items.address}</Text>
          <Text>Phone Number: {props.items.phoneNumber}</Text>
          <Text>Email Adress: {props.items.emailAdress}</Text>
          <Text>Formula: {props.items.formula}</Text>
          <Text>Yearly Spent: {props.items.yearlySpent}</Text>
          <Text>Total Spent: {props.items.totalSpent}</Text>
        </View>
      </Card>
    </View>
  );
};

export default ClientItem;
