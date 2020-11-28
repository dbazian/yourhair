import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addClient } from "../../store/actions/clientListActions";
import { useForm, Controller } from "react-hook-form";

const AddScreen = () => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => dispatch(addClient(data));
  const dispatch = useDispatch();

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
        rules={{ required: true, minLength: 2, maxLength: 20 }}
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
        rules={{ required: true, minLength: 2, maxLength: 20 }}
        defaultValue=""
      />
      {errors.lastName && <Text style={styles.errorText}>This is required.</Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={styles.textInput}
            placeholder={"Address"}
          />
        )}
        name="address"
        rules={{ required: false, maxLength: 20 }}
        defaultValue=""
      />
      {errors.address && <Text style={styles.errorText}></Text>}
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
        rules={{ required: false, maxLength: 20 }}
        defaultValue=""
      />
      {errors.city && <Text style={styles.errorText}></Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={styles.textInput}
            placeholder={"phoneNumber"}
          />
        )}
        name="phoneNumber"
        rules={{ required: true, minLength: 10, maxLength: 10 }}
        defaultValue=""
      />
      {errors.phoneNumber && <Text style={styles.errorText}>This is required.</Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={styles.textInput}
            placeholder={"Email"}
          />
        )}
        name="email"
        rules={{ required: false, maxLength: 20 }}
        defaultValue=""
      />
      {errors.email && <Text style={styles.errorText}>This is required.</Text>}
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
