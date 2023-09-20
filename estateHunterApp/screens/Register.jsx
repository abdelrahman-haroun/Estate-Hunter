import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import LogoWithTitle from "../component/LogoWithTitle";
import InputField from "../component/InputField";
import ButtonO from "../component/ButtonO";
import user from "../assets/icons/user.png";
import email from "../assets/icons/email.png";
import eye from "../assets/icons/eye.png";
import gmail from "../assets/icons/gamil.png";
import facebook from "../assets/icons/facebook.png";
export default function Register() {
  return (
    <ScrollView className="flex-1 bg-[#E7E7E7] ">
      <LogoWithTitle title={"Sign Up"} subTitle={"Register A New Account !!"} />
      <View className="flex items-center justify-center pt-10 gap-4 bg-[#E7E7E7]">
        <InputField placeholder={"Your Name"} icon={user} />
        <InputField placeholder={"Email"} icon={email} />
        <InputField placeholder={"Password"} icon={eye} />
        <InputField placeholder={"Confirm Password"} icon={eye} />
        <ButtonO word={"Sign Up"} />
        <Text>Or Sign Up With</Text>
        <ButtonO word={"Sign Up With Gmail"} icon={gmail} />
        <ButtonO word={"Sign Up With facebook"} icon={facebook} />

        <View className="flex-row items-center pt-4 ">
          <Text className=" text-xl">Have An Account ?</Text>
          <TouchableOpacity>
            <Text className="text-[#F66B0E] text-xl"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
