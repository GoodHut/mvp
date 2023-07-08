import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const UserScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-14 left-5 p-2"
      >
        <Ionicons name='chevron-back' size={24} color='black'/>
      </TouchableOpacity>
      <Text>UserScreen</Text>
    </View>
  );
};

export default UserScreen;
