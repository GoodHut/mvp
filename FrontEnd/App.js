import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import FindUserScreen from "./screens/FindUserScreen";
import CardsScreen from './screens/CardsScreen';
import MeScreen from './screens/MeScreen';
import PayRequestScreen from './screens/PayRequestScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e9e7e2',
          },
          headerTintColor: '#000000',
          headerTintStyle:{
            fontWeight: 'bold',
          }
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name='Cards' component={CardsScreen} />
        <Tab.Screen name='Pay/Request' component={PayRequestScreen} />
        <Tab.Screen name='Me' component={MeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}