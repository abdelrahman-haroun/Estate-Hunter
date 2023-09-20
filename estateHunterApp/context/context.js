import axios from "axios";
import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const DataContext = createContext();
export default DataContext;
export function DataProvider({ children }) {
  const [registerData, setRegisterData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [addAdsData, setAddAdsData] = useState({
    title: "",
    price: "",
    desc: "",
    cat: "",
    type: "",
    location: "",
    img: [],
  });
  const [ads, setAds] = useState([]);
  const [adsUser, setAdsUser] = useState([]);
  const [adsSaved, setAdsSaved] = useState([]);
  const [userActive, setUserActive] = useState({});
  //   ------//----

  const login = async (navigation) => {
    try {
      //   const res = await axios.post(
      //     "http://192.168.2.1:8080/api/v1/users/signin",
      //     loginData
      //   );
      //   setUserActive(res.data.data);
      //   navigation.navigate("AddAds");
      //   await AsyncStorage.setItem("id", res.data.data._id);
      //   navigation.navigate("AddAds");
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  //   ------//----

  const Register = async () => {
    try {
      const res = await axios.post(
        "http://192.168.2.1:8080/api/v1/users/signup",
        registerData
      );
      setUserActive(res.data.data);
      await AsyncStorage.setItem("id", res.data.data._id);
    } catch (err) {
      console.log(err);
    }
  };
  //   ------//----

  const handelAdd = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  //   ------//----

  const getAllAds = async () => {
    try {
      const res = await axios.get("http://192.168.2.236:8080/api/v1/ads");
      setAds(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  //   ------//----
  useEffect(() => {
    getAllAds();
  }, []);
  const getSavedAds = async () => {
    try {
      // function get saved ads
    } catch (err) {
      console.log(err);
    }
  };
  const getUserAds = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  const value = { login, ads };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
