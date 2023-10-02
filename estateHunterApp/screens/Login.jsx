import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Alert } from "react-native";
import LogoWithTitle from "../component/LogoWithTitle";
import InputField from "../component/InputField";
import ButtonO from "../component/ButtonO";
import email from "../assets/icons/email.png";
import eye from "../assets/icons/eye.png";
import gmail from "../assets/icons/gamil.png";
import facebook from "../assets/icons/facebook.png";
import DataContext from "../context/context";
export default function Login({ navigation }) {
  const [show, setShow] = useState(false);
  const { login, setLoginData, loginData } = useContext(DataContext);
  const handelShow = () => {
    setShow(!show);
  };
  const handelInput = (field, text) => {
    setLoginData({ ...loginData, [field]: text });
  };
  console.log(loginData);
  const threeOptionAlertHandler = (response) => {
    //function to make three option alert
    console.log(response.status);
    Alert.alert(
      //title
      "Hello",
      //body
      response.data.message,
      [
        // { text: "May be", onPress: () => console.log("May be Pressed") },
        // { text: "Yes", onPress: () => console.log("Yes Pressed") },
        {
          text: "OK",
          onPress: () =>
            response.status == 200
              ? navigation.push("MyTabs")
              : console.log(""),
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <ScrollView className="flex-1 bg-[#E7E7E7]">
      <LogoWithTitle title={"Login"} subTitle={"welcome back !!"} />
      <View className="flex items-center justify-center pt-4 bg-[#E7E7E7]">
        <InputField
          placeholder={"Email"}
          icon={email}
          type={"email-address"}
          onChange={(text) => handelInput("email", text)}
        />
        <InputField
          placeholder={"Password"}
          icon={eye}
          handelPress={() => handelShow("password")}
          secure={show}
          onChange={(text) => handelInput("password", text)}
        />
        <TouchableOpacity onPress={() => navigation.push("RestPassword")}>
          <Text className="mr-[220] mt-4">Recover password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            try {
              const response = await login();
              threeOptionAlertHandler(response);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          <ButtonO word={"Login"} />
        </TouchableOpacity>
        <Text className="mt-4">Or Continue With</Text>
        <View className="mt-[16]">
          <ButtonO word={"Continue With Google"} icon={gmail} />
          <ButtonO word={"Continue With facebook"} icon={facebook} />
          <View className="flex-row items-center justify-center mt-10 ">
            <Text className=" text-xl"> Don’t Have An Account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="text-[#F66B0E] text-xl"> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
