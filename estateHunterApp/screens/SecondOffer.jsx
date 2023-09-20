import ImageWithDesc from "../component/ImageDesc";
import Logo from "../component/logo";
import { View, Text, TouchableOpacity } from "react-native";
import Second from "../assets/img/second.png";
export default function SecondOffer() {
  return (
    <View className=" bg-[#E7E7E7]">
      <Logo />
      <ImageWithDesc
        image={Second}
        desc={"We have many types of real estate that you are looking for"}
      />
      <View className=" flex-row justify-end items-center h-[120] mr-8  ">
        <View className=" mr-10 flex-row gap-4  ">
          <View className="w-[25] h-[25]  rounded-full  bg-white" />
          <View className="w-[25] h-[25]  rounded-full bg-[#F66B0E]" />
          <View className="w-[25] h-[25] rounded-full bg-white  " />
        </View>
        <View>
          <TouchableOpacity className="bg-blue-500 px-6 py-4 rounded-[12px]   ">
            <Text className="text-xl text-white"> Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
