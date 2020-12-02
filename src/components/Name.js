import React from "react";
import { StyleSheet, View } from "react-native";
import AutoComplete from "react-native-autocomplete-input";
import Colors from "../../constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Name = props => {
  return (
    <View style={styles.inputContainer}>
      <AutoComplete
        style={[styles.formBox, props.style]}
        listStyle={styles.listStyle}
        autoCapitalize="none"
        autoCorrect={false}
        keyExtractor={props.keyExtractor}
        data={props.data}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        editable={props.isEditable}
        hideResults={props.hideResults}
        onSubmitEditing={props.onSubmitEditing}
        renderItem={props.renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    zIndex: 1,
    flex: 1,
    width: "100%",
    position: "absolute",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: Colors.text,
    marginBottom: 8,
  },
  formBox: {
    backgroundColor: Colors.primary,
    color: Colors.secondary,
    textAlign: "center",
    fontSize: hp("2.8%"),
    height: hp("7%"),
    width: wp("95%"),
    borderColor: Colors.alt,
    borderWidth: 2,
  },
  listStyle: {
    maxHeight: hp("10%"),
  },
});

export default Name;
