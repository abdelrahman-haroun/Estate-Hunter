import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import sL from "../assets/icons/smallLogo.png";
import stars from "../assets/icons/stars.png";
export default function LogoWithTitle({ title, subTitle }) {
  return (
    <>
      <View className="flex-row justify-between bg-[#E7E7E7] items-center mb-4">
        <View className="ml-2">
          <View className="flex-row items-center gap-4 mt-8">
            <Text className="text-3xl pl-2 font-bold">{title}</Text>
            <Image source={stars} className="w-[25] h-[25]" />
          </View>
          <Text className="text-[#ABABAB]  pl-1 mt-2 ">{subTitle}</Text>
        </View>
        <View>
          <Image source={sL} className="w-[75] h-[75] mb-4" />
        </View>
      </View>
    </>
  );
}
