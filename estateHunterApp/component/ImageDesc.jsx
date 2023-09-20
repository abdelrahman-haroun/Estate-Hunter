import React from "react";
import { View, Text, Image } from "react-native";
export default function ImageWithDesc({ desc, image }) {
  return (
    <View className="mt-4 flex h-[500] ">
      <Image className=" mx-auto w-[360] h-[250]" source={image} />
      <Text className="text-4xl p-2 mt-2">Real Estate Offer</Text>
      <Text className="text-2xl p-4">{desc}</Text>
    </View>
  );
}
