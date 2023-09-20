import React from "react";
import { View, Text, Image } from "react-native";
import logo from "../assets/icons/Logo.png";
export default function Logo() {
  return (
    <View className="flex items-center justify-end h-[100]">
      <Image source={logo} />
    </View>
  );
}
