import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { addClient, getClients } from "../../store/actions/clientListActions";
import { useForm, Controller } from "react-hook-form";
import Button from "../components/Button";
import Colors from "../../constants/Colors";

const AddScreen = ({ navigation }) => {
  const { control, handleSubmit, errors, reset } = useForm({ mode: "onChange" });

  useEffect(() => {
    navigation.addListener("blur", () => {
      dispatch(getClients());
    });
  }, [navigation]);

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
            placeholderTextColor={Colors.text}
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
            placeholderTextColor={Colors.text}
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
            placeholderTextColor={Colors.text}
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
            placeholderTextColor={Colors.text}
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
            placeholderTextColor={Colors.text}
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
            placeholderTextColor={Colors.text}
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
    color: Colors.text,
  },
  textInput: {
    backgroundColor: Colors.primary,
    color: Colors.secondary,
    height: "9%",
    width: "90%",
    marginVertical: 10,
    borderRadius: 10,
    borderColor: Colors.secondary,
    borderWidth: 2,
    padding: 5,
  },
  errorText: {
    color: "red",
  },
  title: {
    color: Colors.text,
    fontSize: 25,
    marginBottom: 10,
  },
});

export default AddScreen;
