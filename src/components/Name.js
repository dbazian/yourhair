import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AutoComplete from "react-native-autocomplete-input";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Name = (props) => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.text}>Search By Name</Text>
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
  text: {
    color: "pink",
    fontSize: 20,
  },
  formBox: {
    backgroundColor: "white",
    textAlign: "center",
    fontSize: hp("2%"),
    height: hp("7%"),
    width: wp("95%"),
  },
  viewContainer: {
    zIndex: 1,
    flex: 1,
    width: "95%",
    position: "absolute",
    alignItems: "center",
  },
  listStyle: {
    maxHeight: hp("10%"),
  },
});

export default Name;
