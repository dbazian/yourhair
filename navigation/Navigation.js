import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClientScreen from "../src/ClientScreen";
import ClientSearchScreen from "../src/ClientSearchScreen";
import CalendarScreen from "../src/CalendarScreen";
import ProductScreen from "../src/ProductScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarAlt, faUsers, faShoppingBasket } from "@fortawesome/pro-duotone-svg-icons";

const ClientStack = createStackNavigator();

function ClientStackScreen() {
  return (
    <ClientStack.Navigator>
      <ClientStack.Screen name="Client Search" component={ClientSearchScreen} />
      <ClientStack.Screen name="Clients" component={ClientScreen} />
    </ClientStack.Navigator>
  );
}

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
        })}
        tabBarOptions={{
          activeTintColor: "pink",
          inactiveTintColor: "gray",
        }}>
        <Tab.Screen name="Clients" component={ClientStackScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Products" component={ProductScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
