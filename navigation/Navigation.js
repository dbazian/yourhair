import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AddScreen from "../src/screens/AddScreen";
import SortScreen from "../src/screens/SortScreen";
import SearchScreen from "../src/screens/SearchScreen";
import SortedScreen from "../src/screens/SortedScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSearch,
  faSortAlt,
  faUserPlus,
} from "@fortawesome/pro-duotone-svg-icons";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();
const SortStack = createStackNavigator();

const SortStackScreen = () => {
  return (
    <SortStack.Navigator>
      <SortStack.Screen
        name="Sort Clients"
        component={SortScreen}
        options={{ headerStyle: { backgroundColor: Colors.alt2 } }}
      />
      <SortStack.Screen
        name="Sorted Clients"
        component={SortedScreen}
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      />
    </SortStack.Navigator>
  );
};

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
            return (
              <FontAwesomeIcon icon={iconName} size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.alt2,
          style: styles.tabBar,
        }}>
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Sort" component={SortStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "black",
  },
});

export default Navigation;
