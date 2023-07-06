import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FindUserScreen from './FindUserScreen';

const Stack = createNativeStackNavigator();


const HomeScreen = () => {

    const navigation = useNavigation();

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false,
    //     });
    // }, []);


    // Fetching Past Transactions
    // useEffect(() => {

    // }, [])
    // If [] empty, only runs once on mount


  return (
    <Stack.Navigator>
        <Stack.Screen name='FindUser' component={FindUserScreen} />
    </Stack.Navigator>
    // <Tab.Navigator>
    //     <Tab.Screen name='Cards' component={CardsScreen} />
    //     <Tab.Screen name='PayRequest' component={PayRequestScreen} />
    //     <Tab.Screen name='Me' component={MeScreen} />
    // </Tab.Navigator>
  )
}

export default HomeScreen