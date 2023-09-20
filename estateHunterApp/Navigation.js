import React from "react";
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
import { DataProvider } from "./context/context";
const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [
          {
            backgroundColor: "blue",
            height: 40,
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
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/icons/profile.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/icons/profile.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Ads "
        component={Ads}
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/icons/profile.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Maine"
        component={Main}
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
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MyTabs"
          screenOptions={{
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

          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ViewAds" component={ViewAds} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};
