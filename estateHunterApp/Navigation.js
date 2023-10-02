import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import FirstOffer from "./screens/FirstOffer";
import SecondOffer from "./screens/SecondOffer";
import ThirdOffer from "./screens/ThirdOffer";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Main from "./screens/Main";
import Ads from "./screens/Ads";
import ViewAds from "./screens/ViewAds";
import AddAds from "./screens/AddAds";
import SavedAds from "./screens/SavedAds";
import RestPassword from "./screens/RestPassword";

import { DataProvider } from "./context/context";
import MyAds from "./screens/MyAds";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [
          {
            backgroundColor: "blue",
            height: 50,
          },
          null,
        ],
        headerStyle: [
          {
            backgroundColor: "#F66B0E",
            height: 60,
          },
        ],
        tabBarLabelStyle: [{ display: "none" }],
        tabBarActiveBackgroundColor: "#F66B0E",
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/icons/homeeee.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Ads "
        component={Ads}
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/icons/adsse.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="MyAds"
        component={MyAds}
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/icons/save.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/icons/profile.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default Navigation = () => {
  const [user, setUser] = useState(null);
  const getUserActive = async () => {
    try {
      const id = await AsyncStorage.getItem("id");
      if (id) {
        const res = await axios.get(
          `http://192.168.1.36:8080/api/v1/users/${id}`
        );
        setUser(true);
      } else {
        setUser(false);
      }
    } catch (err) {
      setUser(false);
    }
  };
  console.log(user);
  useEffect(() => {
    getUserActive();
  }, []);
  if (user === null) {
    return null; // You can render a loading indicator or a blank screen while waiting
  }
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={user ? "MyTabs" : "firstOffer"}
          screenOptions={{
            headerLeft: null,
            headerStyle: [
              {
                backgroundColor: "#F66B0E",
                height: 60,
              },
            ],
          }}
        >
          <Stack.Screen name="FirstOffer" component={FirstOffer} />
          <Stack.Screen name="SecondOffer" component={SecondOffer} />
          <Stack.Screen name="ThirdOffer" component={ThirdOffer} />
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="AddAds" component={AddAds} />
          <Stack.Screen name="RestPassword" component={RestPassword} />
          <Stack.Screen name="MyAds" component={MyAds} />

          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ViewAds" component={ViewAds} />
          <Stack.Screen name="SavedAds" component={SavedAds} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};
