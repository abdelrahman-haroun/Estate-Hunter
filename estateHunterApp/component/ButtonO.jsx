import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

export default function ButtonO({ word, icon }) {
  return (
    <View
      className={` flex-row justify-center items-center  mt-6 w-[350] rounded-[15px] h-[50] bg-[#005D9B]`}
    >
      <Image source={icon} />
      <Text className={`${icon && "ml-2"} text-white text-xl `}>{word}</Text>
    </View>
  );
}
