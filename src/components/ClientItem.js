import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Card from "./Card";
import Colors from "../../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowDown, faUserMinus } from "@fortawesome/pro-duotone-svg-icons";

const ClientItem = (props) => {
  const [showDetails, setShowDetails] = useState("false");
  return (
    <Card>
      <View style={styles.fullCard}>
        <View style={styles.topCard}>
          <View style={styles.fullName}>
            <Text style={styles.textTop}>{props.items.firstName}-</Text>
            <Text style={styles.textTop}>{props.items.lastName}</Text>
          </View>
          <TouchableOpacity style={styles.icons}>
            <FontAwesomeIcon
              icon={faArrowDown}
              color={Colors.secondary}
              size={40}
              onPress={() => setShowDetails(!showDetails)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <FontAwesomeIcon icon={faUserMinus} color={Colors.secondary} size={40} />
          </TouchableOpacity>
        </View>
        {!showDetails && (
          <View style={styles.bottomCard}>
            <Text style={styles.text}>Phone Number: {props.items.phoneNumber}</Text>
            <Text style={styles.text}>Address: {props.items.address}</Text>
            <Text style={styles.text}>City: {props.items.city}</Text>
            <Text style={styles.text}>Email Address: {props.items.emailAdress}</Text>
          </View>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  fullName: {
    flexDirection: "row",
  },
  topCard: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  bottomCard: {
    width: "100%",
  },
  textTop: {
    color: Colors.text,
    fontSize: 20,
  },
  text: {
    color: Colors.text,
  },
});

export default ClientItem;
