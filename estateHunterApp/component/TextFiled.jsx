import React from "react";
import { View, Text, Image } from "react-native";
import arrow from "../assets/icons/arrow.png";
export default function TextFiled({ text, image, cancel, noBottom }) {
  return (
    <View
      className={`flex-row justify-between items-center ${
        noBottom || "border-b-[2px]"
      } border-black w-[90%] mx-auto`}
    >
      <View className="flex-row items-center gap-2 py-4 ">
        <Image source={image} />
        <Text className="text-xl font-bold">{text}</Text>
      </View>
      {cancel || <Image source={arrow} />}
    </View>
  );
}
