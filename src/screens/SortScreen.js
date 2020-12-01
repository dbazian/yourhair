import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import SortCard from "../components/SortCard";
import { getClients } from "../../store/actions/clientListActions";
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

  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getClients());
    });
  }, [navigation]);

  const handleLastNameDescending = () => {
    dispatch(lastNameDescending());
    navigation.navigate("Sorted Clients");
  };

  const handleLastNameAscending = () => {
    dispatch(lastNameAscending());
    navigation.navigate("Sorted Clients");
  };

  return (
    <View style={styles.full}>
      <SortCard
        style={{ backgroundColor: Colors.primary }}
        iconName={faArrowAltDown}
        title={"Last Name"}
        onPress={handleLastNameDescending}
      />
      <SortCard
        style={{ backgroundColor: Colors.alt2 }}
        iconName={faArrowAltUp}
        title={"Last Name"}
        onPress={handleLastNameAscending}
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
