import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from 'react-native-ionicons';
// import Icon from 'react-native-ionicons';
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import CardsScreen from "./screens/CardsScreen";
import MeScreen from "./screens/MeScreen";
import HomeStackScreen from "./screens/HomeStackScreen";
import CardsStackScreen from "./screens/CardsStackScreen";
import PayRequestStackScreen from "./screens/PayRequestStackScreen";
import MeStackScreen from "./screens/MeStackScreen";

// const Stack = createNativeStackNavigator();
const NavBar = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavBar.Navigator
        screenOptions={({ route }) => ({
          // can also put into each screen component, but put here as a function for convenience
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name == "Home") {
              // iconName = focused ? 'ios-home' : 'ios-home-outline';
              iconName = "home";
            } else if (route.name == "Cards") {
              iconName = "card";
            } else if (route.name == "Pay/Request") {
              iconName = "cart";
            } else if (route.name == "Me") {
              iconName = "body";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 12},
          tabBarActiveTintColor: "#3370E2",
          tabBarInactiveTintColor: "#192C88",
          headerStyle: { backgroundColor: "#e9e7e2" },
          headerTintColor: "#000000",
          headerTintStyle: { fontWeight: "bold" },
          tabBarStyle: { height: 100, paddingTop: 10}
        })}
      >
        <NavBar.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <NavBar.Screen
          name="Cards"
          component={CardsStackScreen}
          options={{ headerShown: false }}
        />
        <NavBar.Screen
          name="Pay/Request"
          component={PayRequestStackScreen}
          options={{ headerShown: false }}
        />
        <NavBar.Screen
          name="Me"
          component={MeStackScreen}
          options={{ headerShown: false }}
        />
      </NavBar.Navigator>
    </NavigationContainer>
  );
}
