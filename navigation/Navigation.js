import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddScreen from "../src/screens/AddScreen";
import ViewScreen from "../src/screens/ViewScreen";
import SortScreen from "../src/screens/SortScreen";
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
            if (route.name === "Add") {
              iconName = faUsers;
            } else if (route.name === "View") {
              iconName = faCalendarAlt;
            } else if (route.name === "Sort") {
              iconName = faShoppingBasket;
            }
            return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "pink",
          inactiveTintColor: "gray",
        }}>
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="View" component={ViewScreen} />
        <Tab.Screen name="Sort" component={SortScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
