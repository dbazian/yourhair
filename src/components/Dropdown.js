import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const useDropdown = (label, defaultState, options) => {
  const [selectedValue, setSelectedValue] = useState(defaultState);

  const DropdownMaker = (props) => (
    <View style={[props.style]}>
      <RNPickerSelect
        style={{
          inputIOS: [styles.text],
          inputAndroid: [styles.text],
          placeholder: {
            fontSize: 20,
            color: "pink",
            padding: 5,
          },
        }}
        useNativeAndroidPickerStyle={false}
        value={selectedValue}
        placeholder={{ label }}
        disabled={props.disabled}
        onValueChange={props.onValueChange}
        items={options.map((x) => ({ label: x, value: x }))}
      />
    </View>
  );
  return [selectedValue, DropdownMaker, setSelectedValue];
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "pink",
    padding: 5,
  },
});

export default useDropdown;
