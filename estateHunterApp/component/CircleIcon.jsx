import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

export default function CircleIcon({ image, sub, active }) {
  // console.log(active);
  return (
    <View className="flex items-center">
      <View
        className={`w-[50] h-[50] rounded-full ${
          active ? "bg-orange-600" : "bg-blue-300"
        } relative `}
      >
        <Image source={image} className=" absolute top-3 left-3" />
      </View>
      <Text>{sub}</Text>
    </View>
  );
}
