import React from "react";
import { View, Image, Text } from "react-native";
import im from "../assets/img/second.png";
export default function AdsCard() {
  return (
    <View className="flex-row bg-white rounded-[20px] w-[90vw] mx-auto my-4">
      <View>
        <Image
          source={im}
          className="w-[30vw] h-[130] rounded-tl-[20px] rounded-bl-[20px]"
        />
      </View>
      <View>
        <Text className="px-2 mt-2">ljahsd</Text>
        <Text className="px-2 mt-4">asdasd</Text>
        <View className="flex-row mt-10 justify-between px-2 w-[60vw]">
          <Text>asdasd</Text>
          <Text>asdasd</Text>
        </View>
      </View>
    </View>
  );
}
