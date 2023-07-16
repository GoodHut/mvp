import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  StyleSheet,
  Animated,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { useCardAnimation } from "@react-navigation/stack";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"
import { ScrollView } from "react-native-gesture-handler";

const PaymentMethodsScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const { current } = useCardAnimation();
  // const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center">
      <Pressable
        // Convert this to tailwind, probably not hard
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0,0,0,0.5)" },
        ]}
        onPress={navigation.goBack}
      />

      {/* Responsible for modal */}
      <Animated.View
        style={{
          height: height,
          width: "100%",
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [height, height * 0.3],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >


        <View className="flex-1 p-4 bg-[#E5E5E5] rounded-3xl">

          <View className='flex-col h-2/3'>
            {/* Top Portion */}
            <View className='flex-1 flex-row'>
              <TouchableOpacity onPress={navigation.goBack} className="flex-1">
                <Ionicons name="arrow-back" size={30} color="grey" />
              </TouchableOpacity>

              <Text className='text-lg font-semibold'>Choose a way to pay</Text>

              <View className='flex-1'></View>
            </View>

            {/* Cards */}
            <ScrollView>

            </ScrollView>

            {/* Bottom Portion */}
            <TouchableOpacity
              onPress={() => navigation.navigate("PaymentMethods")}
              className="bg-blue-900 rounded-full py-3 px-14 items-center"
            >
              <Text className="text-white text-xl font-extrabold">Next</Text>
            </TouchableOpacity>
          </View>
          

        </View>
      </Animated.View>
    </View>
  );
};

export default PaymentMethodsScreen;
