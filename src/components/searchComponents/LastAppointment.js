import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { filterLastAppointment } from "../../../store/actions/lastAppointmentActions";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import useDropdown from "../Dropdown";
const LastAppointment = () => {
  const navigation = useNavigation();
  const [selectedAppointment, AppointmentDropdown, setSelectedAppointment] = useDropdown("By Order", null, [
    "Ascending",
    "Descending",
  ]);

  const [selectedAppointmentMonth, AppointmentMonthDropdown, setSelectedAppointmentMonth] = useDropdown(
    "All Months",
    null,
    [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
  );
  const [selectedAppointmentYear, AppointmentYearDropdown, setSelectedAppointmentYear] = useDropdown(
    "All Years",
    null,
    ["2020", "2019", "2018"]
  );

  const dispatch = useDispatch();
  const [openLastApp, setOpenLastApp] = useState(false);
  const toggleOpenApp = () => {
    setOpenLastApp(!openLastApp);
  };

  const lastAppointmentHandler = (itemValue) => {
    setSelectedAppointment(itemValue);
  };
  const appointmentMonthHandler = (itemValue) => {
    setSelectedAppointmentMonth(itemValue);
  };
  const appointmentYearHandler = (itemValue) => {
    setSelectedAppointmentYear(itemValue);
  };

  return (
    <View style={styles.la}>
      <TouchableOpacity onPress={toggleOpenApp}>
        <Text style={styles.text}>Sort By Last Appointment</Text>
      </TouchableOpacity>
      {openLastApp && (
        <View>
          <AppointmentDropdown selectedValue={selectedAppointment} onValueChange={lastAppointmentHandler} />
          <AppointmentMonthDropdown selectedValue={selectedAppointmentMonth} onValueChange={appointmentMonthHandler} />
          <AppointmentYearDropdown selectedValue={selectedAppointmentYear} onValueChange={appointmentYearHandler} />
          <Button
            onPress={() => {
              navigation.navigate("Clients");
              dispatch(filterLastAppointment(selectedAppointment, selectedAppointmentMonth, selectedAppointmentYear));
            }}
            title="Search"></Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  la: {
    backgroundColor: "white",
    padding: 5,
    borderWidth: 2,
  },
  text: {
    fontSize: 20,
  },
});

export default LastAppointment;
