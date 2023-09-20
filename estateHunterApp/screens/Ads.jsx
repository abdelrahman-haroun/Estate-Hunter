import React, { useState } from "react";
import { ScrollView, View, FlatList } from "react-native";
import CircleIcon from "../component/CircleIcon";
import home from "../assets/icons/hommme.png";
import Logo from "../component/logo";
import search from "../assets/icons/search.png";
import InputField from "../component/InputField";
import AdsCard from "../component/AdsCard";
export default function Main() {
  return (
    <ScrollView className="bg-[#E7E7E7]">
      <Logo />
      <View className="mx-auto">
        <InputField placeholder={"What are you looking for ?"} icon={search} />
      </View>
      <View className="flex-row items-center justify-around mt-4">
        <CircleIcon image={home} sub={"home"} />
        <CircleIcon image={home} sub={"home"} />
        <CircleIcon image={home} sub={"home"} />
        <CircleIcon image={home} sub={"home"} />
        <CircleIcon image={home} sub={"home"} />
      </View>
      <View>
        <AdsCard />
      </View>
    </ScrollView>
  );
}
