import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import ImageSlider from "../component/ImageSlider";
import tele from "../assets/icons/tele.png";
import save from "../assets/icons/save.png";
import msg from "../assets/icons/mesage.png";
import share from "../assets/icons/share.png";
import DataContext from "../context/context";
const AlertHandler = (response) => {
  //function to make three option alert
  Alert.alert(
    "Hello",
    //body
    `phoneNumber :${response}`,
    [
      {
        text: "OK",
        onPress: () => console.log(""),
      },
    ],
    { cancelable: true }
  );
};
const threeOptionAlertHandler = (response) => {
  //function to make three option alert
  Alert.alert(
    "Hello",
    //body
    response.message,
    [
      {
        text: "OK",
        onPress: () => console.log(""),
      },
    ],
    { cancelable: true }
  );
};
export default function ViewAds({ route }) {
  const data = route.params?.data;
  const { saveAds } = useContext(DataContext);

  return (
    <View className="bg-[#E7E7E7] flex-1">
      <ImageSlider images={data.img} />
      <View className="flex-row justify-between w-[90vw] mx-auto mt-4">
        <Text>{data.title.slice(0, 34)}</Text>
        <Text className="text-orange-600">
          {" "}
          {data.price}JOD {data.type == "Rent" ? "pre/month" : ""}
        </Text>
      </View>
      <View className="pl-5 mt-4 flex-row">
        <Image />
        <Text className="text-gray-500">{data.location}</Text>
      </View>
      <View className="w-[70vw] mx-auto h-[60] mt-4  flex-row justify-around items-center">
        <TouchableOpacity className="bg-blue-700 py-4 px-5 rounded-2xl  flex-row">
          <Image source={share} />
          <Text className="ml-2"> Share </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-blue-700 py-4 px-5 rounded-2xl flex-row"
          onPress={async () => {
            const res = await saveAds(data);
            threeOptionAlertHandler(res);
          }}
        >
          <Image source={save} />
          <Text className="ml-2"> Saved </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-6 w-[90vw] mx-auto">
        <Text className="font-bold text-2xl">Descriaption :</Text>
        <Text className="mt-4">{data.desc}</Text>
      </View>
      <View className="w-[90vw] mx-auto mt-8 flex-row justify-between ">
        <View>
          <View>
            <Text>{data.userId?.name}</Text>
            <Text className="mt-2 text-gray-500">Owner</Text>
          </View>
          <Image />
        </View>
        <View className="flex-row gap-4">
          <TouchableOpacity
            onPress={() => {
              AlertHandler(data.phoneNumber);
            }}
          >
            <View className="w-14 h-14 rounded-full bg-blue-600">
              <Image source={tele} className="absolute top-[26%] left-[30%]" />
            </View>
          </TouchableOpacity>

          <View className="w-14 h-14 rounded-full bg-blue-600">
            <Image className="absolute top-[26%] left-[26%]" source={msg} />
          </View>
        </View>
      </View>
    </View>
  );
}
