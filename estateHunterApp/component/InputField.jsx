import React from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";

export default function InputField({
  icon,
  placeholder,
  type,
  handelPress,
  secure,
  onChange,
}) {
  const handleInputChange = (text) => {
    onChange(text);
  };
  return (
    <View className="flex-row items-center justify-between rounded-[15px] px-4 my-2 bg-white w-[350] h-[50]">
      <TextInput
        placeholder={placeholder}
        className="text-l flex-1"
        placeholderTextColor={"#ABABAB"}
        keyboardType={type}
        secureTextEntry={false || !secure}
        onChangeText={(text) => handleInputChange(text)}
      />
      <TouchableOpacity onPress={handelPress}>
        <Image source={icon} className="w-[25] h-[25]" />
      </TouchableOpacity>
    </View>
  );
}
