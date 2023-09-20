import React from "react";
import { View, Image, Text } from "react-native";
import avatar from "../assets/icons/avatar.png";
import TextFiled from "../component/TextFiled";
import profile from "../assets/icons/profile.png";
import save from "../assets/icons/save.png";
import notification from "../assets/icons/notification.png";
import about from "../assets/icons/about.png";
import terms from "../assets/icons/terms.png";
import logout from "../assets/icons/logout.png";
import share from "../assets/icons/share.png";

export default function Profile() {
  return (
    <>
      <View className="flex-1 bg-[#E7E7E7]">
        <View className="flex items-center my-4">
          <Image source={avatar} className="w-[100px] h-[100px]" />
          <Text className="text-2xl">mohammad</Text>
        </View>
        <TextFiled text={"Edit Profile"} image={profile} />
        <TextFiled text={"Saved"} image={save} />
        <TextFiled text={"Notification"} image={notification} />
        <Text className="text-xl ml-4 mt-4"> Other More </Text>
        <TextFiled text={"Terms & Condition"} image={terms} />
        <TextFiled text={"About App "} image={about} />
        <TextFiled text={"Share App "} image={share} cancel={true} />
        <TextFiled
          text={"LogOut "}
          image={logout}
          cancel={true}
          noBottom={true}
        />
        <View className="mt-10">
          <Text className="text-center ">Copy Right By Haroun</Text>
        </View>
      </View>
    </>
  );
}
