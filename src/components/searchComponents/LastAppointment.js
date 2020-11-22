import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useDropdown from "../Dropdown";

const LastAppointment = () => {
  const [selectedAppointment, AppointmentDropdown, setSelectedAppointment] = useDropdown("By Order", null, [
    "Ascending",
    "Descending",
  ]);
  const [selectedAppointmentMonth, AppointmentMonthDropdown, setSelectedAppointmentMonth] = useDropdown(
    "By Month",
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
  const [selectedAppointmentYear, AppointmentYearDropdown, setSelectedAppointmentYear] = useDropdown("By Year", null, [
    "2020",
    "2019",
    "2018",
  ]);
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
    <View>
      <TouchableOpacity onPress={toggleOpenApp}>
        <Text>Sort By Last Appointment</Text>
      </TouchableOpacity>
      {openLastApp && (
        <View>
          <AppointmentDropdown selectedValue={selectedAppointment} onValueChange={lastAppointmentHandler} />
          <AppointmentMonthDropdown selectedValue={selectedAppointmentMonth} onValueChange={appointmentMonthHandler} />
          <AppointmentYearDropdown selectedValue={selectedAppointmentYear} onValueChange={appointmentYearHandler} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default LastAppointment;
