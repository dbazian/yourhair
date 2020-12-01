import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import SortCard from "../components/SortCard";
import {
  faArrowAltUp,
  faArrowAltDown,
} from "@fortawesome/pro-duotone-svg-icons";
import Colors from "../../constants/Colors";
import {
  lastNameDescending,
  lastNameAscending,
} from "../../store/actions/clientSortActions";

const SortScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLastNameDescending = () => {
    dispatch(lastNameDescending());
    navigation.navigate("Sorted Clients");
  };

  const handleLastNameAscending = () => {
    dispatch(lastNameAscending());
  };

  return (
    <View style={styles.full}>
      <SortCard
        style={styles.color2}
        iconName={faArrowAltDown}
        title={"Last Name"}
        onPress={handleLastNameDescending}
      />
      <SortCard
        style={styles.color3}
        iconName={faArrowAltUp}
        title={"Last Name"}
        onPress={handleLastNameAscending}
      />
      <SortCard
        style={styles.color}
        iconName={faArrowAltUp}
        title={"Last Appointment"}
      />
      <SortCard
        style={styles.color1}
        iconName={faArrowAltDown}
        title={"City"}
      />
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
    backgroundColor: Colors.alt,
  },
});

export default SortScreen;
