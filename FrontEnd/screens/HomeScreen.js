import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import FindUserScreen from './FindUserScreen';



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
    <View className='mt-20 items-center'>
        <TouchableOpacity 
        onPress={() => navigation.navigate('FindUser')}
        className='p-4 bg-[#00CCBB] rounded-lg'
        >
            <Text>Go to Find User</Text>
        </TouchableOpacity>
    </View>
    // <Stack.Navigator>
    //     <Stack.Screen name='FindUser' component={FindUserScreen} />
    // </Stack.Navigator>
    // <Tab.Navigator>
    //     <Tab.Screen name='Cards' component={CardsScreen} />
    //     <Tab.Screen name='PayRequest' component={PayRequestScreen} />
    //     <Tab.Screen name='Me' component={MeScreen} />
    // </Tab.Navigator>
  )
}

export default HomeScreen