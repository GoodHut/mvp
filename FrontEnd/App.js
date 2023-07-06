import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-ionicons';

import HomeScreen from "./screens/HomeScreen";
import FindUserScreen from "./screens/FindUserScreen";
import CardsScreen from "./screens/CardsScreen";
import MeScreen from "./screens/MeScreen";
import PayRequestScreen from "./screens/PayRequestScreen";

// const Stack = createNativeStackNavigator();
const NavBar = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavBar.Navigator
        screenOptions={ ({ route }) => ({

          // can also put into each screen component, but put here as a function for convenience
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;

            if (route.name == 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name == 'Cards') {
              iconName = focused ? 'card' : 'card-outline';
            } else if (route.name == 'Pay/Request') {
              iconName = focused ? 'cash' : 'cash-outline';
            } else if (route.name == 'Me') {
              iconName = focused ? 'diamond' : 'diamond-outline';
            }

            return <Icon name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor: '81D8D0',
          tabBarInactiveTintColor: '#003366',
          headerStyle: { backgroundColor: "#e9e7e2" },
          headerTintColor: "#000000",
          headerTintStyle: { fontWeight: "bold" },
        })}
      >
        <NavBar.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
              <HomeStack.Screen name="FindUser" component={FindUserScreen} />
            </HomeStack.Navigator>
          )}
        </NavBar.Screen>

        <NavBar.Screen name="Cards" component={CardsScreen} />
        <NavBar.Screen name="Pay/Request" component={PayRequestScreen} />
        <NavBar.Screen name="Me" component={MeScreen} />
      </NavBar.Navigator>
    </NavigationContainer>
  );
}
