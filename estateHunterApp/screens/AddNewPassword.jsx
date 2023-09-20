import React from "react";
import { View, Text } from "react-native";
import InputField from "../component/InputField";
export default function AddNewPassword() {
  return (
    <View>
      <InputField placeholder={"New Password "} />
      <InputField placeholder={"Re Type Password "} />
    </View>
  );
}
