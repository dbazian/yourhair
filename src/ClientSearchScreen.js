import React, { useState, useEffect } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import useDropdown from "./components/Dropdown";
import clientList from "../data/clientList";

const ClientSearchScreen = ({ navigation }) => {
  //const lastAppointment = clientList.map((x) => x.firstName);
  const [
    selectedAppointment,
    AppointmentDropdown,
    setSelectedAppointment,
  ] = useDropdown("Ordered Ascending or Descending", null, ["Ascending", "Descending"]);
  const [openLastApp, setOpenLastApp] = useState(false);
  const lastAppointmentHandler = (itemValue) => {
    setSelectedAppointment(itemValue);
  };
  const toggleOpenApp = () => {
    setOpenLastApp(!openLastApp);
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={toggleOpenApp}>
          <Text>Sort By Last Appointment</Text>
        </TouchableOpacity>
        {openLastApp && (
          <AppointmentDropdown selectedValue={selectedAppointment} onValueChange={lastAppointmentHandler} />
        )}
      </View>

      <Button onPress={() => navigation.navigate("Clients")} title="Search"></Button>
    </View>
  );
};

export default ClientSearchScreen;
