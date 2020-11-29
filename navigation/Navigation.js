import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddScreen from "../src/screens/AddScreen";
import SortScreen from "../src/screens/SortScreen";
import SearchScreen from "../src/screens/SearchScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faSortAlt, faUserPlus } from "@fortawesome/pro-duotone-svg-icons";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Add") {
              iconName = faUserPlus;
            } else if (route.name === "Search") {
              iconName = faSearch;
            } else if (route.name === "Sort") {
              iconName = faSortAlt;
            }
            return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: "black",
        }}>
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Sort" component={SortScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
