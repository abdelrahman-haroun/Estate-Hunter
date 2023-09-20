import React from "react";
import { View, Image, Text, ScrollView } from "react-native";

export default function CardForAds({ image, location, desc, title, price }) {
  return (
    <View className="w-[300] h-[290] bg-blue-300 rounded-[20px]  mt-2 mx-4">
      <View className="w-[300] h-[180]">
        <Image
          source={{ uri: image }}
          className="w-[300] h-[170] rounded-t-[20px]"
        />
      </View>
      <View className=" px-4 flex gap-6">
        <View className=" flex-row justify-between ">
          <Text>{title}</Text>
          <Text>{price}</Text>
        </View>
        <View>
          <Text>{desc}</Text>
        </View>
        <View className=" flex-row  ">
          <Image />
          <Text>{location}</Text>
        </View>
      </View>
    </View>
  );
}
