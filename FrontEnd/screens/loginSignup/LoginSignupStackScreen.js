import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import LoginSignupLandingScreen from './LoginSignupLandingScreen'
import SignupPhoneNumberScreen from './SignupPhoneNumberScreen'

const LoginSignupStackScreen = () => {

    Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name="Landing"
                    component={LoginSignupLandingScreen}
                />
                <Stack.Screen 
                    name="PhoneNumber"
                    component={SignupPhoneNumberScreen}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default LoginSignupStackScreen