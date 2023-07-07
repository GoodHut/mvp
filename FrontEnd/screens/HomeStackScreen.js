import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';
import FindUserScreen from './FindUserScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <HomeStack.Screen name="FindUser" component={FindUserScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen