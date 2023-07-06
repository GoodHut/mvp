import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const PayRequestScreen = () => {

  const navigation = useNavigation();

  return (
    <View className='mt-20 items-center'>
      <TouchableOpacity 
      onPress={() => navigation.navigate('FindUser')}
      className='p-4 bg-[#00CCBB] rounded-lg'
      >
          <Text>Go to Find User</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PayRequestScreen