import { faWhistle } from "@fortawesome/pro-duotone-svg-icons";
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { PulseIndicator } from "react-native-indicators";
import Colors from "../../constants/Colors";

const Button = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
        {props.animating && (
          <PulseIndicator
            style={styles.indicator}
            animating={props.animating}
            color={Colors.primary}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 15,
    shadowColor: Colors.alt2,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.99,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  indicator: {
    position: "absolute",
  },
  text: {
    fontSize: 20,
    color: Colors.primary,
  },
});

export default Button;
