import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addClient } from "../../store/actions/clientListActions";
import ClientModel from "../../models/ClientModel";

const AddScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const clientList = new ClientModel(firstName, lastName, address, city, phoneNumber, email);
  const addClientHandler = () => {
    dispatch(addClient(clientList));
  };

  return (
    <View style={styles.full}>
      <TextInput
        value={firstName}
        onChangeText={(e) => setFirstName(e)}
        style={styles.textInput}
        placeholder={"First Name"}
      />
      <TextInput
        value={lastName}
        onChangeText={(e) => setLastName(e)}
        style={styles.textInput}
        placeholder={"Last Name"}
      />
      <TextInput value={address} onChangeText={(e) => setAddress(e)} style={styles.textInput} placeholder={"Address"} />
      <TextInput value={city} onChangeText={(e) => setCity(e)} style={styles.textInput} placeholder={"City"} />
      <TextInput
        value={phoneNumber}
        onChangeText={(e) => setPhoneNumber(e)}
        style={styles.textInput}
        placeholder={"Phone Number"}
      />
      <TextInput value={email} onChangeText={(e) => setEmail(e)} style={styles.textInput} placeholder={"Email"} />
      <Text>(future add)Products Used</Text>
      <Text>(future add)Total Spent</Text>
      <Text>(future add)Formula</Text>
      <Button onPress={addClientHandler} title="Add Client"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    paddingVertical: 100,
    height: "100%",
    backgroundColor: "pink",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
  textInput: {
    backgroundColor: "white",
    height: "8%",
    width: "90%",
    marginVertical: 5,
  },
});

export default AddScreen;
