import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ClientCard from "../components/ClientCard";

const SortScreen = (props) => {
  return (
    <View style={styles.full}>
      <ClientCard title={"Total Spent Descending"} />
      <ClientCard style={styles.color1} title={"Yearly Spent"} />
      <ClientCard style={styles.color2} title={"Last Name Descending"} />
      <ClientCard style={styles.color3} title={"Last Name Ascending"} />
      <ClientCard style={styles.color} title={"Last Appointment Ascending"} />
      <ClientCard style={styles.color1} title={"City"} />
      <ClientCard style={styles.color2} title={"Product Sales"} />
      <ClientCard style={styles.color3} title={"Most Used Products"} />
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
    backgroundColor: "#ab8a81",
  },
  color3: {
    backgroundColor: "#f9cbcb",
  },
});

export default SortScreen;
