import React, { useEffect, useRef } from "react";
import { FlatList, Image, View, Text } from "react-native";

const PaidSlider = ({ data, currentIndex, setCurrentIndex }) => {
  const flatListRef = useRef(null);
  const renderImage = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: item.img }}
          className="w-screen h-[250] "
          style={{ objectFit: "fill" }}
        />
      </View>
    );
  };

  const advanceToNextImage = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    flatListRef.current.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
  };

  useEffect(() => {
    const interval = setInterval(advanceToNextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderImage}
          horizontal
          pagingEnabled
          initialScrollIndex={currentIndex}
          onMomentumScrollEnd={({ nativeEvent }) => {
            //   // Update the currentIndex when the user manually scrolls.
            const newIndex = Math.floor(
              nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
            );
            setCurrentIndex(newIndex);
          }}
        />
      </View>
    </>
  );
};
export default PaidSlider;
