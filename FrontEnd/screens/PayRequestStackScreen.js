import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PayRequestScreen from './PayRequestScreen';
import FindUserScreen from './FindUserScreen';

const PayRequestStack = createNativeStackNavigator();

const PayRequestStackScreen = () => {
  return (
    <PayRequestStack.Navigator>
        <PayRequestStack.Screen name="PayRequestScreen" component={PayRequestScreen}/>
        <PayRequestStack.Screen name="FindUser" component={FindUserScreen} />
    </PayRequestStack.Navigator>
  )
}

export default PayRequestStackScreen