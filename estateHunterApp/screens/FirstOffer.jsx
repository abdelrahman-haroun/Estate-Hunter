import ImageWithDesc from "../component/ImageDesc";
import Logo from "../component/logo";
import { View, Text, TouchableOpacity } from "react-native";
import First from "../assets/img/firstpic.png";
export default function FirstOffer({ navigation }) {
  return (
    <View className=" bg-[#E7E7E7] flex-1">
      <Logo />
      <ImageWithDesc
        image={First}
        desc={
          "Thousand of Real estate offer in Your Area tailored to Your requirements"
        }
      />
      <View className=" flex-row justify-end items-center h-[120] mr-8  ">
        <View className=" mr-10 flex-row gap-4  ">
          <View className="w-[25] h-[25]  rounded-full bg-[#F66B0E]" />
          <TouchableOpacity onPress={() => navigation.navigate("SecondOffer")}>
            <View className="w-[25] h-[25]  rounded-full bg-white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ThirdOffer")}>
            <View className="w-[25] h-[25] rounded-full bg-white border-solid border-[4] " />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="bg-blue-500 px-6 py-4 rounded-[12px]"
            onPress={() => navigation.navigate("SecondOffer")}
          >
            <Text className="text-xl text-white"> Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
