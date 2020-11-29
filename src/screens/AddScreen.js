import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { addClient } from "../../store/actions/clientListActions";
import { useForm, Controller } from "react-hook-form";
import Button from "../components/Button";

const AddScreen = () => {
  const { control, handleSubmit, errors, reset } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addClient(data));
    reset();
  };

  return (
    <View style={styles.full}>
      <Text style={styles.title}>Add Client</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={styles.textInput}
            placeholder={"First Name"}
            placeholderTextColor="#757575"
          />
        )}
        name="firstName"
        rules={{ required: true, minLength: 2, maxLength: 20 }}
        defaultValue=""
      />
      {errors.firstName && <Text style={styles.errorText}>First Name Is Required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={styles.textInput}
            placeholder={"Last Name"}
            placeholderTextColor="#757575"
          />
        )}
        name="lastName"
        rules={{ required: true, minLength: 2, maxLength: 20 }}
        defaultValue=""
      />
      {errors.lastName && <Text style={styles.errorText}>Last Name Is Required</Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={styles.textInput}
            placeholder={"Address"}
            placeholderTextColor="#757575"
          />
        )}
        name="address"
        rules={{ required: false }}
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
            placeholderTextColor="#757575"
          />
        )}
        name="city"
        rules={{ required: false }}
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
            placeholder={"Phone Number"}
            placeholderTextColor="#757575"
          />
        )}
        name="phoneNumber"
        rules={{ required: true, minLength: 10, maxLength: 10 }}
        defaultValue=""
      />
      {errors.phoneNumber && <Text style={styles.errorText}>Not A Valid Phone Number.</Text>}
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={styles.textInput}
            placeholder={"Email"}
            placeholderTextColor="#757575"
          />
        )}
        name="email"
        rules={{ required: false, maxLength: 20 }}
        defaultValue=""
      />
      {errors.email && <Text style={styles.errorText}>This is required.</Text>}
      <Button text={"Submit"} style={styles.button} onPress={handleSubmit(onSubmit)} title="Submit"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    paddingVertical: 100,
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    color: "black",
  },
  textInput: {
    backgroundColor: "pink",
    height: "8%",
    width: "90%",
    marginVertical: 10,
    borderRadius: 10,
  },
  errorText: {
    color: "red",
  },
  title: {
    color: "white",
    fontSize: 25,
    marginBottom: 10,
  },
});

export default AddScreen;
