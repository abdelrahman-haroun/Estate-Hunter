import React, { useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import avatar from "../assets/icons/avatar.png";
import TextFiled from "../component/TextFiled";
import profile from "../assets/icons/profile.png";
import save from "../assets/icons/save.png";
import notification from "../assets/icons/notification.png";
import about from "../assets/icons/about.png";
import terms from "../assets/icons/terms.png";
import logout from "../assets/icons/logout.png";
import share from "../assets/icons/share.png";
import DataContext from "../context/context";

export default function Profile({ navigation }) {
  const { userActive } = useContext(DataContext);
  const logOut = async () => {
    await AsyncStorage.clear();
    navigation.push("Login");
  };
  return (
    <View className="flex-1 bg-[#E7E7E7]">
      <View className="flex items-center my-4">
        <Image source={avatar} className="w-[100px] h-[100px]" />
        <Text className="text-2xl">{userActive.name}</Text>
      </View>
      <TextFiled text={"Edit Profile"} image={profile} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SavedAds");
        }}
      >
        <TextFiled text={"Saved"} image={save} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MyAds");
        }}
      >
        <TextFiled
          text={"MyAds"}
          image={require("../assets/icons/hommme.png")}
        />
      </TouchableOpacity>
      <Text className="text-xl ml-4 mt-4"> Other More </Text>
      <TextFiled text={"Terms & Condition"} image={terms} />
      <TextFiled text={"About App "} image={about} />
      <TextFiled text={"Share App "} image={share} cancel={true} />

      <TouchableOpacity onPress={logOut}>
        <TextFiled
          text={"LogOut "}
          image={logout}
          cancel={true}
          noBottom={true}
        />
      </TouchableOpacity>
      <View className="mt-10">
        <Text className="text-center ">Copy Right By Haroun</Text>
      </View>
    </View>
  );
}
