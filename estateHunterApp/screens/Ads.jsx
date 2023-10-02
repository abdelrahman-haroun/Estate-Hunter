import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, TouchableOpacity, FlatList } from "react-native";
import CircleIcon from "../component/CircleIcon";
import home from "../assets/icons/hommme.png";
import Logo from "../component/logo";
import searchh from "../assets/icons/search.png";
import InputField from "../component/InputField";
import AdsCard from "../component/AdsCard";
import DataContext from "../context/context";
import axios from "axios";

export default function Main({ navigation }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ type: "", cat: "", location: "" });
  const [activeFilter, setActiveFilter] = useState({
    type: "",
    cat: "",
    location: "",
  });
  const shallowEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    getAds();
  }, [filter]);

  const getAds = async () => {
    try {
      const res = await axios.get(
        `http://192.168.1.36:8080/api/v1/ads/ads?type=${filter.type}&location=${filter.location}&cat=${filter.cat}`
      );
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const navigateToTargetScreen = (el) => {
    navigation.navigate("ViewAds", { data: el });
  };

  const circleIconsData = [
    { image: home, sub: "All", filter: { cat: "", location: "", type: "" } },
    {
      image: home,
      sub: "Rent",
      filter: { type: "Rent", cat: "", location: "" },
    },
    {
      image: home,
      sub: "Sell",
      filter: { type: "Sell", cat: "", location: "" },
    },
    {
      image: home,
      sub: "Amman",
      filter: { type: "", cat: "", location: "Amman" },
    },
    {
      image: home,
      sub: "Zarqa",
      filter: { type: "", cat: "", location: "Zarqa" },
    },
    {
      image: home,
      sub: "Villa",
      filter: { type: "", cat: "villa", location: "" },
    },
    {
      image: home,
      sub: "Apartment",
      filter: { type: "", cat: "apartment", location: "" },
    },
  ];
  console.log(activeFilter);
  return (
    <ScrollView className="bg-[#E7E7E7]">
      <Logo />
      <View className="mx-auto">
        <InputField
          placeholder={"What are you looking for ?"}
          icon={searchh}
          type={"email-address"}
          onChange={(text) => setSearch(text)}
        />
      </View>
      <FlatList
        data={circleIconsData}
        keyExtractor={(item) => item.sub}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setFilter(item.filter);
              setActiveFilter(item.filter);
            }}
            className="px-2"
          >
            <CircleIcon
              image={item.image}
              sub={item.sub}
              active={shallowEqual(activeFilter, item.filter)}
            />
          </TouchableOpacity>
        )}
      />
      <View>
        {data
          .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
          .map((el) => {
            return (
              <TouchableOpacity
                key={el._id}
                onPress={() => navigateToTargetScreen(el)}
              >
                <AdsCard
                  image={el.img}
                  title={el.title}
                  desc={el.desc}
                  location={el.location}
                  price={el.price}
                />
              </TouchableOpacity>
            );
          })}
      </View>
    </ScrollView>
  );
}
