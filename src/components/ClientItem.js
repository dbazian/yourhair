import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import Card from "./Card";
import Colors from "../../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faUserMinus,
} from "@fortawesome/pro-duotone-svg-icons";
import { removeClient } from "../../store/actions/clientListActions";

const ClientItem = props => {
  const [showDetails, setShowDetails] = useState("false");
  const dispatch = useDispatch();

  return (
    <Card>
      <View>
        <View style={styles.topCard}>
          <View style={styles.fullName}>
            <Text style={styles.textTop}>{props.items.firstName}-</Text>
            <Text style={styles.textTop}>{props.items.lastName}</Text>
          </View>
          <FontAwesomeIcon
            icon={showDetails ? faArrowDown : faArrowUp}
            color={Colors.secondary}
            size={40}
            onPress={() => setShowDetails(!showDetails)}
          />
          <FontAwesomeIcon
            icon={faUserMinus}
            color={Colors.secondary}
            size={40}
            onPress={() => dispatch(removeClient(props.items.key))}
          />
        </View>
        {!showDetails && (
          <View style={styles.bottomCard}>
            <Text style={styles.text}>
              Phone Number: {props.items.phoneNumber}
            </Text>
            <Text style={styles.text}>Address: {props.items.address}</Text>
            <Text style={styles.text}>City: {props.items.city}</Text>
            <Text style={styles.text}>
              Email Address: {props.items.emailAdress}
            </Text>
          </View>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  fullName: {
    flexDirection: "row",
    width: "50%",
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
