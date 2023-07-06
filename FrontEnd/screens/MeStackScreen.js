import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MeScreen from './MeScreen';

const MeStack = createNativeStackNavigator();

const MeStackScreen = () => {
  return (
    <MeStack.Navigator>
        <MeStack.Screen name="MeScreen" component={MeScreen} />
    </MeStack.Navigator>
  )
}

export default MeStackScreen