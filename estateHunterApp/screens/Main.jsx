import React, { useState } from "react";
import {
  ScrollView,
  View,
  FlatList,
  Text,
  Button,
  SafeAreaView,
} from "react-native";
import Logo from "../component/logo";
import CardForAds from "../component/CardForAds";
export default function Main() {
  const [data, setData] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    },
  ]);

  const handleError = (error) => {
    // Handle the error here
    console.log(error);
  };

  const renderItem = ({ item }) => {
    try {
      return (
        <CardForAds
          key={item.id}
          image={item.image}
          title={item.title}
          location={item.title}
          price={item.title}
          desc={item.title}
        />
      );
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <ScrollView className="bg-[#E7E7E7] ">
      <Logo />
      <View className="w-[180] ml-4 h-[40] ">
        <Button title="Add New Ads" />
      </View>
      <View className="flex-row justify-between mt-2 items-center ">
        <Text className="text-2xl text-blue-500 pl-2 ">Premium Ads </Text>
        <Text className="text-l text-orange-500 pr-2 ">View All </Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={renderItem}
        horizontal
      />
      <View className="mt-2 ">
        <Text className="text-2xl text-blue-500 pl-2 "> Recently Added </Text>
      </View>
      <View className="my-2 mx-auto">
        {data.map((item) => {
          return (
            <CardForAds
              key={item.id}
              image={item.image}
              title={item.title}
              location={item.title}
              price={item.title}
              desc={item.title}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
