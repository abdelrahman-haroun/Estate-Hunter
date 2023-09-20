import React, { useState } from "react";
import { View, ScrollView, Text, Button, Image } from "react-native";
import InputField from "../component/InputField";
import { SelectList } from "react-native-dropdown-select-list";
import * as ImagePicker from "expo-image-picker";
import ButtonO from "../component/ButtonO";
export default function AddAds() {
  const [selected, setSelected] = useState({ f: "", a: "", c: "" });
  const [images, setImages] = useState([]);

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
    setImages([...images, ...x]);
  };
  console.log(images);
  console.log(selected);
  return (
    <ScrollView className="flex-1 bg-[#E7E7E7]">
      <View>
        <Text className="text-2xl font-bold text-center mt-2 ">
          ------------ Add New Ads ------------
        </Text>
      </View>
      <View>
        <Text className="text-xl font-bold mx-auto  mt-2 ">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ut
          cupiditate beatae quod fugiat dolorum, vitae quasi qui earum adipisci
          repudiandae consequuntur soluta. Quidem laborum repudiandae recusandae
          iusto debitis quam.{" "}
        </Text>
      </View>
      <View className="w-[90vw] mx-auto">
        <InputField placeholder={"Title"} />
        <InputField placeholder={`Price "JD"`} />
        <InputField placeholder={"Description"} />
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
          setSelected={(val) => setSelected({ ...selected, f: val })}
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
          setSelected={(val) => setSelected(val)}
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
          setSelected={(val) => setSelected(val)}
        />
      </View>
      <View className="w-[90vw] flex-row   mt-4">
        <Image source={{ uri: images[0] }} className="w-16 h-10 mx-2" />
        <Image source={{ uri: images[1] }} className="w-16 h-10 mx-2" />

        <Image source={{ uri: images[2] }} className="w-16 h-10 mx-2" />
        <View>
          <Button title="image piker" onPress={pickImage} />
        </View>
      </View>
      <View className="w-[90vw] mx-auto mt-4 font-bold ">
        <Text className="text-xl text-orange-600">
          to try premium Ads you can contact with this number (+962779576700) or
          Send 3jd for one month premium
        </Text>
      </View>
      <View className="flex-row justify-center mb-4">
        <ButtonO word={"Add New Ads"} />
      </View>
    </ScrollView>
  );
}
