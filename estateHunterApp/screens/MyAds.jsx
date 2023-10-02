import React, { useContext } from "react";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import Logo from "../component/logo";
import AdsCard from "../component/AdsCard";
import DataContext from "../context/context";
import ButtonO from "../component/ButtonO";

export default function Main({ navigation }) {
  const { adsUser, deleteMyAds } = useContext(DataContext);
  console.log(adsUser);
  const navigateToTargetScreen = (el) => {
    navigation.navigate("ViewAds", { data: el });
  };
  return (
    <ScrollView className="bg-[#E7E7E7]">
      <Logo />
      <View className="w-[90vw]">
        <Text className=" mx-auto text-2xl ">MY ADS</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.push("AddAds")}>
          <ButtonO word={"Add new ads"} />
        </TouchableOpacity>
      </View>
      <View>
        {adsUser?.length > 0 ? (
          adsUser.map((el) => (
            <View key={el._id}>
              <TouchableOpacity onPress={() => navigateToTargetScreen(el)}>
                <AdsCard
                  image={el.img}
                  title={el.title}
                  desc={el.desc}
                  location={el.location}
                  price={el.price}
                />
                <Text className="text-center">status of ads : {el.status}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteMyAds(el._id)}>
                <Text className="text-center">delete Ads</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View className="w-[90vw] mx-auto mt-8">
            <Text className="text-2xl">No Recently Add Ads</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
