import React, { useContext } from "react";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import Logo from "../component/logo";
import AdsCard from "../component/AdsCard";
import DataContext from "../context/context";

export default function Main({ navigation }) {
  const { adsSaved, deleteAds } = useContext(DataContext);
  const navigateToTargetScreen = (el) => {
    navigation.navigate("ViewAds", { data: el });
  };
  return (
    <ScrollView className="bg-[#E7E7E7]">
      <Logo />
      <View className="w-[90vw]">
        <Text className=" mx-auto text-2xl ">SAVED ADS</Text>
      </View>
      <View>
        {adsSaved?.length > 0 ? (
          adsSaved.map((el) => (
            <View key={el._id}>
              <TouchableOpacity onPress={() => navigateToTargetScreen(el)}>
                <AdsCard
                  image={el.img}
                  title={el.title}
                  desc={el.desc}
                  location={el.location}
                  price={el.price}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteAds(el)}>
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
