import { View, Text, SafeAreaView, Image, TextInput, Touchable} from 'react-native'
import React, {useState} from 'react'

import {FontAwesome} from '@expo/vector-icons'
import PasswordTextInput from '../../components/PasswordTextInput'
import HideKeyboardView from '../../components/HideKeyboardView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const LoginSignupLandingScreen = () => {

    [password, setPassword] = useState('')

    const navigation = useNavigation()

    return (
        <HideKeyboardView>
            <SafeAreaView className="items-center bg-white flex-1" >

                <View className="mt-5">
                    <FontAwesome name="paypal" size={50} color="blue" />
                </View>

                <View className="w-full px-10">
                    <TextInput placeholder='Phone number' 
                        style={{fontSize: 18}} className="border px-3 py-4 rounded-md border-gray-400 mt-10" 
                        keyboardType='numeric'/>
                    
                    <PasswordTextInput onChangeText={(text) => {setPassword(text)}} />
                    
                    <TouchableOpacity className="mt-1.5">
                        <Text className=" text-blue-800 font-bold">Forgotten your password?</Text>
                    </TouchableOpacity>
                </View>

                <View className="w-full space-y-3 mt-10 px-10">
                    <TouchableOpacity className="rounded-full bg-blue-800 py-3">
                        <Text style={{fontSize: 18}} className="text-center text-white font-bold">Log In</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity className="rounded-full border-blue-800 border-2 py-3" onPress={() => {navigation.navigate("PhoneNumber")}}>
                        <Text style={{fontSize: 18}} className="text-center font-bold text-blue-800">Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </HideKeyboardView>
    )
}

export default LoginSignupLandingScreen