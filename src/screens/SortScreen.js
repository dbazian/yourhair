import React from "react";
import { View, StyleSheet } from "react-native";
import SortCard from "../components/SortCard";
import { faArrowAltUp, faArrowAltDown } from "@fortawesome/pro-duotone-svg-icons";
import Colors from "../../constants/Colors";

const SortScreen = () => {
  return (
    <View style={styles.full}>
      <SortCard style={styles.color2} iconName={faArrowAltDown} title={"Last Name"} />
      <SortCard style={styles.color3} iconName={faArrowAltUp} title={"Last Name"} />
      <SortCard style={styles.color} iconName={faArrowAltUp} title={"Last Appointment"} />
      <SortCard style={styles.color1} iconName={faArrowAltDown} title={"City"} />
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    height: "100%",
    backgroundColor: "black",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 50,
  },
  color1: {
    backgroundColor: "#a7f6d8",
  },
  color2: {
    backgroundColor: Colors.secondary,
  },
  color3: {
    backgroundColor: "#f9cbcb",
  },
});

export default SortScreen;
