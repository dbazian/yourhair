import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 15,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
  text: {
    fontSize: 20,
    color: Colors.text,
  },
});

export default Button;