import axios from "axios";
import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const DataContext = createContext();
export default DataContext;
export function DataProvider({ children }) {
  const [images, setImages] = useState([]);
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
    phoneNumber: "",
    img: [],
  });
  const [ads, setAds] = useState([]);
  const [adsUser, setAdsUser] = useState([]);
  const [adsSaved, setAdsSaved] = useState([]);
  const [userActive, setUserActive] = useState({});
  //   ------//----

  const login = async () => {
    try {
      const res = await axios.post(
        "http://192.168.1.36:8080/api/v1/users/signin",
        loginData
      );

      setUserActive(res.data.data);
      await AsyncStorage.setItem("id", res.data.data._id);
      setAdsSaved(res.data.data.adsSaved);
      return res;
    } catch (err) {
      return err.response;
    }
    getUserAds();
  };
  //   ------//----
  const Register = async () => {
    try {
      const res = await axios.post(
        "http://192.168.1.36:8080/api/v1/users/signup",
        registerData
      );
      return res;
    } catch (err) {
      return err.response;
    }
  };
  //   ------//----

  const handelAdd = async (navigation) => {
    const formData = new FormData();
    formData.append("title", addAdsData.title);
    formData.append("price", addAdsData.price);
    formData.append("phoneNumber", addAdsData.phoneNumber);
    formData.append("desc", addAdsData.desc);
    formData.append("type", addAdsData.type);
    formData.append("cat", addAdsData.cat);
    formData.append("location", addAdsData.location);
    formData.append("userId", await AsyncStorage.getItem("id"));
    for (let i = 0; i < images.length; i++) {
      formData.append("img", {
        name: new Date() + "_profile",
        uri: images[i],
        type: "image/jpg",
      });
    }
    try {
      const res = await axios.post(
        "http://192.168.1.36:8080/api/v1/ads",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      getUserAds();
      navigation.push("MyAds");
    } catch (err) {
      console.log(err);
    }
  };
  //   ------//----

  const getAllAds = async () => {
    try {
      const res = await axios.get("http://192.168.1.36:8080/api/v1/ads");
      setAds(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  //   ------//----
  useEffect(() => {
    getAllAds();
    getUserActive();
  }, []);
  // --------
  const saveAds = async (el) => {
    try {
      const res = await axios.patch(
        "http://192.168.1.36:8080/api/v1/account/addAdsSaved",
        { id: userActive._id, adsId: el._id }
      );
      setAdsSaved([...adsSaved, el]);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  };
  // ----------
  const deleteAds = async (el) => {
    try {
      const res = await axios.patch(
        "http://192.168.1.36:8080/api/v1/account/deleteAdsSaved",
        { id: userActive._id, adsId: el._id }
      );
      setAdsSaved(adsSaved.filter((item) => item._id !== el._id));
    } catch (err) {
      console.log(err);
    }
  };
  // ----------
  const getUserAds = async () => {
    try {
      const id = await AsyncStorage.getItem("id");
      const res = await axios.post(
        `http://192.168.1.36:8080/api/v1/ads/userAds`,
        { id: id }
      );
      console.log("a");
      console.log(res.data.data);
      setAdsUser(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  // ----------------
  const getUserActive = async () => {
    const id = await AsyncStorage.getItem("id");
    if (id) {
      const res = await axios.get(
        `http://192.168.1.36:8080/api/v1/users/${id}`
      );
      setUserActive(res.data.data);
      setAdsSaved(res.data.data.adsSaved);
      getUserAds();
    }
  };

  // -----------
  const deleteMyAds = async (id) => {
    try {
      const res = await axios.delete(
        `http://192.168.1.36:8080/api/v1/ads/delete/${id}`
      );
      getUserAds();
    } catch (err) {
      console.log(err);
    }
  };
  const value = {
    login,
    ads,
    Register,
    setRegisterData,
    registerData,
    setLoginData,
    loginData,
    addAdsData,
    setAddAdsData,
    handelAdd,
    images,
    setImages,
    saveAds,
    deleteAds,
    adsSaved,
    userActive,
    adsUser,
    deleteMyAds,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
