import React from "react";
import { View, TextInput, Image } from "react-native";

export default function InputField({ icon, placeholder }) {
  return (
    <View className="flex-row items-center justify-between rounded-[15px] px-4 my-2 bg-white w-[350] h-[50]">
      <TextInput
        placeholder={placeholder}
        className="text-l flex-1"
        placeholderTextColor={"#ABABAB"}
      />
      <Image source={icon} className="w-[25] h-[25]" />
    </View>
  );
}
