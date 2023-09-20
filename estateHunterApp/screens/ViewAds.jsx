import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ImageSlider from "../component/ImageSlider";
import tele from "../assets/icons/tele.png";
import save from "../assets/icons/save.png";
import msg from "../assets/icons/mesage.png";
import share from "../assets/icons/share.png";
export default function ViewAds() {
  return (
    <View className="bg-[#E7E7E7] flex-1">
      <ImageSlider />
      <View className="flex-row justify-between w-[90vw] mx-auto mt-4">
        <Text>Title</Text>
        <Text className="text-orange-600"> JD</Text>
      </View>
      <View className="pl-5 mt-4 flex-row">
        <Image />
        <Text className="text-gray-500">Amman</Text>
      </View>
      <View className="w-[70vw] mx-auto h-[60] mt-4  flex-row justify-around items-center">
        <TouchableOpacity className="bg-blue-700 py-4 px-5 rounded-2xl  flex-row">
          <Image source={share} />
          <Text className="ml-2"> Share </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-700 py-4 px-5 rounded-2xl flex-row">
          <Image source={save} />
          <Text className="ml-2"> Saved </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-6 w-[90vw] mx-auto">
        <Text className="font-bold text-2xl">Desc :</Text>
        <Text className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          minus asperiores eum obcaecati. Eligendi sequi, ea omnis quasi
          perspiciatis asperiores quisquam cum adipisci? Iste porro architecto
          ea voluptatibus sunt quis?
        </Text>
      </View>
      <View className="w-[90vw] mx-auto mt-8 flex-row justify-between ">
        <View>
          <View>
            <Text>Name</Text>
            <Text className="mt-2 text-gray-500">Owner</Text>
          </View>
          <Image />
        </View>
        <View className="flex-row gap-4">
          <View className="w-14 h-14 rounded-full bg-blue-600">
            <Image source={tele} className="absolute top-[26%] left-[30%]" />
          </View>
          <View className="w-14 h-14 rounded-full bg-blue-600">
            <Image className="absolute top-[26%] left-[26%]" source={msg} />
          </View>
        </View>
      </View>
    </View>
  );
}
