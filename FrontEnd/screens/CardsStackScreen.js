import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CardsScreen from './CardsScreen';

const CardsStack = createNativeStackNavigator();

const CardsStackScreen = () => {
  return (
    <CardsStack.Navigator>
        <CardsStack.Screen name="CardsScreen" component={CardsScreen}/>
    </CardsStack.Navigator>
  )
}

export default CardsStackScreen