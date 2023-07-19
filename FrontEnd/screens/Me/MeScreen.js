import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectSelf } from "../../features/selfSlice";

const MeScreen = () => {
  const navigation = useNavigation();
  const self = useSelector(selectSelf);

  return (
    <View>
      <Text>ID: {self.user_id}</Text>
      <Text>Name: {self.user_name}</Text>
      <Text>Phone Number: {self.user_phone_number}</Text>
      <Text>Password: {self.user_password}</Text>
      <Text>QRCode: {self.user_QRCode}</Text>
      <Text>Balance: {self.user_balance}</Text>
    </View>
  );
};

export default MeScreen;
