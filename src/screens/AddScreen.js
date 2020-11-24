import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const AddScreen = (props) => {
  return (
    <View style={styles.full}>
      <TextInput style={styles.textInput} placeholder={"First Name"} />
      <TextInput style={styles.textInput} placeholder={"Last Name"} />
      <TextInput style={styles.textInput} placeholder={"Address"} />
      <TextInput style={styles.textInput} placeholder={"Phone Number"} />
      <TextInput style={styles.textInput} placeholder={"Email"} />
      <Text>(future add)Products Used</Text>
      <Text>(future add)Total Spent</Text>
      <Text>(future add)Formula</Text>
      <Button title="Add Client"></Button>
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
