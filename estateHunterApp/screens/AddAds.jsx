import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import InputField from "../component/InputField";
import { SelectList } from "react-native-dropdown-select-list";
import * as ImagePicker from "expo-image-picker";
import ButtonO from "../component/ButtonO";
import DataContext from "../context/context";

export default function AddAds({ navigation }) {
  const { addAdsData, setAddAdsData, handelAdd, images, setImages } =
    useContext(DataContext);

  const handelInput = (field, item) => {
    setAddAdsData({ ...addAdsData, [field]: item });
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,

      aspect: [4, 3],
      quality: 1,
    });
    let x = [];
    for (let i = 0; i < result.assets.length; i++) {
      x.push(result.assets[i].uri);
    }
    setImages([...x]);
  };

  return (
    <ScrollView className="flex-1 bg-[#E7E7E7]">
      <View>
        <Text className="text-2xl font-bold text-center mt-2 ">
          -------- Add New Ads -------
        </Text>
      </View>
      <View>
        <Text className="text-xl font-bold mx-auto  mt-2 ">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ut
          cupiditate beatae quod fugiat dolorum, iusto debitis quam.{" "}
        </Text>
      </View>
      <View className="w-[90vw] mx-auto">
        <InputField
          placeholder={"Title"}
          onChange={(text) => handelInput("title", text)}
          type={"email-address"}
        />
        <InputField
          placeholder={`Price "JD"`}
          type={"phone-pad"}
          onChange={(text) => handelInput("price", text)}
        />
        <InputField
          placeholder={"Phone Number"}
          type={"phone-pad"}
          onChange={(text) => handelInput("phoneNumber", text)}
        />
        <InputField
          placeholder={"Description"}
          type={"email-address"}
          onChange={(text) => handelInput("desc", text)}
        />
        <SelectList
          placeholder="Type"
          data={[{ value: "rent" }, { value: "sell" }]}
          boxStyles={{ backgroundColor: "white", width: "95%", marginTop: 4 }}
          search={false}
          inputStyles={{ color: "gray" }}
          dropdownStyles={{
            backgroundColor: "white",
            width: "95%",
          }}
          save="value"
          setSelected={(val) => setAddAdsData({ ...addAdsData, type: val })}
        />
        <SelectList
          placeholder="Category"
          data={[
            { value: "home" },
            { value: "apartment" },
            { value: "villa" },
            { value: "hotel" },
            { value: "office" },
          ]}
          boxStyles={{ backgroundColor: "white", width: "95%", marginTop: 4 }}
          search={false}
          inputStyles={{ color: "gray" }}
          dropdownStyles={{
            backgroundColor: "white",
            width: "95%",
          }}
          save="value"
          setSelected={(val) => setAddAdsData({ ...addAdsData, cat: val })}
        />
        <SelectList
          placeholder="Location"
          data={[{ value: "amman" }, { value: "zarqa" }]}
          boxStyles={{ backgroundColor: "white", width: "95%", marginTop: 4 }}
          search={false}
          inputStyles={{ color: "gray" }}
          dropdownStyles={{
            backgroundColor: "white",
            width: "95%",
          }}
          save="value"
          setSelected={(val) => setAddAdsData({ ...addAdsData, location: val })}
        />
      </View>
      <View className="w-[90vw] mx-auto flex-row justify-center   mt-4">
        {images.map((el, index) => {
          return (
            <Image
              key={index}
              source={{ uri: el }}
              className="w-16 h-14 mx-2"
            />
          );
        })}
      </View>
      <View className=" flex-row justify-center">
        <Button title="image piker" onPress={pickImage} />
      </View>
      <View className="w-[90vw] mx-auto mt-4 font-bold ">
        <Text className="text-xl text-orange-600">
          to try premium Ads you can contact with this number (+962779576700) or
          Send 3jd for one month premium
        </Text>
      </View>
      <View className="flex-row justify-center mb-4">
        <TouchableOpacity onPress={() => handelAdd(navigation)}>
          <ButtonO word={"Add New Ads"} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
