import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addClient } from "../../store/actions/clientListActions";
import ClientModel from "../../models/ClientModel";
import { useForm, Controller } from "react-hook-form";

const AddScreen = () => {
  const { control, handleSubmit, errors } = useForm();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = (data) => console.log(data);
  const dispatch = useDispatch();
  const clientList = new ClientModel(firstName, lastName, address, city, phoneNumber, email);

  return (
    <View style={styles.full}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={styles.textInput}
            placeholder={"First Name"}
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text style={styles.errorText}>This is required.</Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={styles.textInput}
            placeholder={"Last Name"}
          />
        )}
        name="lastName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text style={styles.errorText}>This is required.</Text>}
      <TextInput value={address} onChangeText={(e) => setAddress(e)} style={styles.textInput} placeholder={"Address"} />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={styles.textInput}
            placeholder={"City"}
          />
        )}
        name="city"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text style={styles.errorText}>This is required.</Text>}
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
      <Button style={styles.button} onPress={handleSubmit(onSubmit)} title="Add Client"></Button>
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
    color: "white",
  },
  button: {
    color: "white",
    backgroundColor: "white",
  },
  textInput: {
    backgroundColor: "white",
    height: "8%",
    width: "90%",
    marginVertical: 5,
  },
  errorText: {
    color: "red",
  },
});

export default AddScreen;
