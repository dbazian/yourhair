import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClientScreen from "../src/ClientScreen";
import CalenderScreen from "../src/CalenderScreen";
import ProductScreen from "../src/ProductScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarAlt, faUsers } from "@fortawesome/pro-duotone-svg-icons";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Clients" component={ClientScreen} />
        <Tab.Screen name="Calender" component={CalenderScreen} />
        <Tab.Screen name="Products" component={ProductScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
