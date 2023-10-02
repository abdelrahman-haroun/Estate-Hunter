import React, { useState, useContext } from "react";
import { Text, View, TouchableOpacity, ScrollView, Alert } from "react-native";
import LogoWithTitle from "../component/LogoWithTitle";
import InputField from "../component/InputField";
import ButtonO from "../component/ButtonO";
import user from "../assets/icons/user.png";
import email from "../assets/icons/email.png";
import eye from "../assets/icons/eye.png";
import gmail from "../assets/icons/gamil.png";
import facebook from "../assets/icons/facebook.png";
import DataContext from "../context/context";
export default function Register({ navigation }) {
  const { setRegisterData, Register, registerData } = useContext(DataContext);
  const [show, setShow] = useState({ password: false, passwordConfirm: false });

  const handelShow = (e) => {
    setShow({ ...show, [e]: !show[e] });
  };
  const handelInput = (field, text) => {
    setRegisterData({ ...registerData, [field]: text });
  };
  const threeOptionAlertHandler = (response) => {
    //function to make three option alert
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
            response.status == 201 ? navigation.push("Login") : console.log(""),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView className="flex-1 bg-[#E7E7E7] ">
      <LogoWithTitle title={"Sign Up"} subTitle={"Register A New Account !!"} />
      <View className="flex items-center justify-center pt-10 gap-4 bg-[#E7E7E7]">
        <InputField
          placeholder={"Your Name"}
          icon={user}
          type={"email-address"}
          onChange={(text) => handelInput("name", text)}
        />
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
          secure={show.password}
          onChange={(text) => handelInput("password", text)}
        />
        <InputField
          placeholder={"Confirm Password"}
          icon={eye}
          handelPress={() => handelShow("passwordConfirm")}
          secure={show.passwordConfirm}
          onChange={(text) => handelInput("confirmPassword", text)}
        />
        <TouchableOpacity
          onPress={async () => {
            try {
              const response = await Register();
              threeOptionAlertHandler(response);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          <ButtonO word={"Sign Up"} />
        </TouchableOpacity>
        <Text>Or Sign Up With</Text>
        <ButtonO word={"Sign Up With Gmail"} icon={gmail} />
        <ButtonO word={"Sign Up With facebook"} icon={facebook} />

        <View className="flex-row items-center pt-4 ">
          <Text className=" text-xl">Have An Account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-[#F66B0E] text-xl"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
