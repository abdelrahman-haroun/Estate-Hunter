import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const handelNextImage = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handelPrevImage = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };
  const images = [
    require("../assets/img/firstpic.png"),
    require("../assets/img/second.png"),
    require("../assets/img/firstpic.png"),
    require("../assets/img/second.png"),
  ];
  return (
    <View className="relative">
      <Image
        source={images[index]}
        className="w-screen h-[300] "
        style={{ objectFit: "fill" }}
      />
      <TouchableOpacity
        onPress={handelPrevImage}
        className="absolute top-[25%] left-0 opacity-0 "
      >
        <Image
          source={require("../assets/icons/arrow.png")}
          className="w-[50] h-[100]  rotate-180"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handelNextImage}
        className="absolute top-[25%] right-0 opacity-0 "
      >
        <Image
          source={require("../assets/icons/arrow.png")}
          className="w-[50] h-[100]  "
        />
      </TouchableOpacity>
      <View className="flex-row  justify-center ">
        {images.map((el, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => setIndex(i)}>
              <View
                className={`w-[15] h-[15] mx-1 rounded-full ${
                  i == index ? "bg-[#F66B0E]" : "bg-white"
                }`}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
