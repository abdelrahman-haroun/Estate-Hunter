import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import InputField from "../component/InputField";
import email from "../assets/icons/email.png";
import ButtonO from "../component/ButtonO";
import axios from "axios";
export default function RestPassword({ navigation }) {
  const [restData, setRestData] = useState({});
  const [complete, setComplete] = useState(false);
  const [message, setMessage] = useState("");
  const handelInput = (field, text) => {
    setRestData({ ...restData, [field]: text });
  };
  const handelSubmit = async () => {
    try {
      const res = await axios.post(
        "http://192.168.1.36:8080/api/v1/account/restPassword",
        restData
      );
      setMessage(`${restData.email}`);
      setComplete(true);
      return res;
    } catch (err) {
      return err.response;
    }
  };
  const handelRest = async () => {
    try {
      const res = await axios.post(
        "http://192.168.1.36:8080/api/v1/account/restPasswordComplete",
        restData
      );
      res.nav = "Login";
      return res;
    } catch (err) {
      return err.response;
    }
  };
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
          onPress: () => {
            if (response.nav == "Login" && response.status == 200) {
              navigation.push(response.nav);
            } else console.log("");
          },
        },
      ],
      { cancelable: true }
    );
  };
  console.log(restData);
  return (
    <View className="flex-1 bg-[#E7E7E7] items-center ">
      <View className="mt-10">
        {complete || (
          <>
            <Text>Enter Your Email </Text>
            <InputField
              onChange={(text) => handelInput("email", text)}
              icon={email}
              type={"email-address"}
              placeholder={"Enter Your Email"}
            />
            <TouchableOpacity
              onPress={async () => {
                try {
                  const response = await handelSubmit();
                  threeOptionAlertHandler(response);
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              <ButtonO word={"Submit"} />
            </TouchableOpacity>
          </>
        )}
        {complete && (
          <>
            <View className="bg-white p-4 mb-6 rounded-xl ">
              <Text>
                check your email to insert otp code sended to your email{" "}
                {message} if not receiver
                <TouchableOpacity
                  onPress={async () => {
                    try {
                      const response = await handelSubmit();
                      threeOptionAlertHandler(response);
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                >
                  <Text className="text-blue-500 underline">
                    click here to resend
                  </Text>
                </TouchableOpacity>
              </Text>

              <Text> if email insert wrong click here </Text>
              <TouchableOpacity onPress={() => setComplete(false)}>
                <Text className="text-blue-500 underline">
                  to change email{" "}
                </Text>
              </TouchableOpacity>
            </View>
            <View className="mt-10">
              <Text>Enter OTP code from Your Email </Text>
              <InputField
                onChange={(text) => handelInput("otp", text)}
                type={"email-address"}
                placeholder={"Enter OTP"}
              />
            </View>

            <View className="mt-10">
              <Text>Enter New Password </Text>
              <InputField
                onChange={(text) => handelInput("password", text)}
                placeholder={"Enter New Password"}
              />
              <InputField
                onChange={(text) => handelInput("confirmPassword", text)}
                placeholder={"Enter Confirm Password"}
              />
              <TouchableOpacity
                onPress={async () => {
                  try {
                    const response = await handelRest();
                    threeOptionAlertHandler(response);
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                <ButtonO word={"Submit"} />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}
