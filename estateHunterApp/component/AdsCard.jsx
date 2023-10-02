import React from "react";
import { View, Image, Text } from "react-native";
export default function AdsCard({ image, title, desc, price, location }) {
  return (
    <View className="flex-row bg-white rounded-[20px] w-[90vw] mx-auto my-4">
      <View>
        <Image
          source={{ uri: image[0] }}
          className="w-[30vw] h-[130] rounded-tl-[20px] rounded-bl-[20px]"
        />
      </View>
      <View className="w-[220]">
        <Text className="px-2 mt-2">{title.slice(0, 15) + "..."}</Text>
        <Text className="px-2 mt-2">{desc.slice(0, 50) + " ...."}</Text>
        <View className="flex-row mt-6 justify-between px-2 w-[60vw]">
          <Text>{location}</Text>
          <Text>{price}</Text>
        </View>
      </View>
    </View>
  );
}
