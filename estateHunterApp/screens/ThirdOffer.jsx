import ImageWithDesc from "../component/ImageDesc";
import Logo from "../component/logo";
import { View, Text, TouchableOpacity } from "react-native";
import Third from "../assets/img/third.png";
export default function ThirdOffer({ navigation }) {
  return (
    <View className=" bg-[#E7E7E7] flex-1">
      <Logo />
      <ImageWithDesc
        image={Third}
        desc={"We have many types of real estate that you are looking for"}
      />
      <View className=" flex-row justify-center items-center h-[120]  ">
        <TouchableOpacity
          className="bg-blue-500 w-[350px] py-4 rounded-[12px]   "
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-xl text-white text-center "> Get Started </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
