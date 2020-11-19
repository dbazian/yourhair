import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClientScreen from "../src/ClientScreen";
import CalendarScreen from "../src/CalendarScreen";
import ProductScreen from "../src/ProductScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarAlt, faUsers, faShoppingBasket } from "@fortawesome/pro-duotone-svg-icons";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Clients") {
              iconName = faUsers;
            } else if (route.name === "Calendar") {
              iconName = faCalendarAlt;
            } else if (route.name === "Products") {
              iconName = faShoppingBasket;
            }
            return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Clients" component={ClientScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Products" component={ProductScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
