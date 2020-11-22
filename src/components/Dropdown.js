import React, { useState } from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const useDropdown = (label, defaultState, options) => {
  const [selectedValue, setSelectedValue] = useState(defaultState);

  const DropdownMaker = (props) => (
    <View style={[props.style]}>
      <RNPickerSelect
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

export default useDropdown;
