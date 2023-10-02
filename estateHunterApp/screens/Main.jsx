import React, { useState, useContext, useEffect } from "react";
import {
  ScrollView,
  View,
  FlatList,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import Logo from "../component/logo";
import CardForAds from "../component/CardForAds";
import PaidSlider from "../component/PaidSlider";
export default function Main({ navigation }) {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://192.168.1.36:8080/api/v1/account/getAll"
      );
      setData(res.data.data);
      setIsLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const navigateToTargetScreen = (item) => {
    navigation.navigate("ViewAds", { data: item });
  };

  const renderItem = ({ item }) => {
    try {
      return (
        <TouchableOpacity
          key={item._id}
          on
          onPress={() => navigateToTargetScreen(item)}
        >
          <CardForAds
            key={item._id}
            image={item.img}
            title={item.title}
            location={item.location}
            price={item.price}
            desc={item.desc}
          />
        </TouchableOpacity>
      );
    } catch (error) {
      console.log(error);
    }
  };
  if (!isLoading) {
    return (
      <View className="flex-1 items-center justify-center ">
        <Text>Wait Just A moment</Text>
      </View>
    );
  }
  return (
    <ScrollView className="bg-[#E7E7E7] ">
      <Logo />
      <View className="mt-2 ">
        {data?.paid.length > 0 && (
          <PaidSlider
            data={data?.paid}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
      </View>

      <View className="flex-row justify-between mt-2 items-center ">
        <Text className="text-2xl text-blue-500 pl-2 ">Premium Ads </Text>
        <Text className="text-l text-orange-500 pr-2 ">View All </Text>
      </View>

      <FlatList
        keyExtractor={(item) => item._id}
        data={data.pre}
        renderItem={renderItem}
        horizontal
      />
    </ScrollView>
  );
}
