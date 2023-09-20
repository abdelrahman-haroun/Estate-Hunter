import React, { useContext } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import LogoWithTitle from "../component/LogoWithTitle";
import InputField from "../component/InputField";
import ButtonO from "../component/ButtonO";
import email from "../assets/icons/email.png";
import eye from "../assets/icons/eye.png";
import gmail from "../assets/icons/gamil.png";
import facebook from "../assets/icons/facebook.png";
import DataContext from "../context/context";
export default function Login({ navigation }) {
  const { login } = useContext(DataContext);
  return (
    <ScrollView className="flex-1 bg-[#E7E7E7]">
      <LogoWithTitle title={"Login"} subTitle={"welcome back !!"} />
      <View className="flex items-center justify-center pt-4 bg-[#E7E7E7]">
        <InputField placeholder={"Email"} icon={email} />
        <InputField placeholder={"Password"} icon={eye} />
        <Text className="mr-[220] mt-4">Recover password</Text>
        <ButtonO word={"Login"} />
        <Text className="mt-4">Or Continue With</Text>
        <View className="mt-[16]">
          <ButtonO word={"Continue With Google"} icon={gmail} />
          <ButtonO word={"Continue With facebook"} icon={facebook} />
          <View className="flex-row items-center justify-center mt-10 ">
            <Text className=" text-xl"> Don’t Have An Account ?</Text>
            <TouchableOpacity onPress={() => login(navigation)}>
              <Text className="text-[#F66B0E] text-xl"> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
