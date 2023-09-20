import React from "react";
import { View, Text } from "react-native";
import InputField from "../component/InputField";
export default function RestPassword() {
  return (
    <View className="flex-1 bg-[#E7E7E7]">
      <Text>Enter Your Email </Text>
      <InputField placeholder={"Enter Your Email"} />
      <View>
        {/* add function if after send req to back end shown this box  */}
        <Text>Enter OTP code from Your Email </Text>
        <InputField placeholder={"Enter OTP"} />
        {/* after this if correct going to add new password page  */}
      </View>
    </View>
  );
}
