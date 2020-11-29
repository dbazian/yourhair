import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Card from "./Card";
import Colors from "../../constants/Colors";

const ClientItem = (props) => {
  return (
    <View>
      <Card>
        <View>
          <Text style={styles.text}>First Name: {props.items.firstName}</Text>
          <Text style={styles.text}>Last Name: {props.items.lastName}</Text>
          <Text style={styles.text}>Phone Number: {props.items.phoneNumber}</Text>
          <Text style={styles.text}>Address: {props.items.address}</Text>
          <Text style={styles.text}>City: {props.items.city}</Text>
          <Text style={styles.text}>Email Adress: {props.items.emailAdress}</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
  },
});

export default ClientItem;
