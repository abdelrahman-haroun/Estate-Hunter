import { useState, createContext, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();
export default ApiContext;
export function ApiContextProvider({ children }) {
  // admin active
  const [adminActive, setAdminActive] = useState({});
  // this state to store users data
  const [usersData, setUsersData] = useState([]);
  //   this state to store ads data
  const [adsData, setAdsData] = useState([]);
  //  this to store count of user vers date
  const [usersDate, setUsersDate] = useState([]);
  //  --------
  const [paidAds, setPaidAds] = useState([]);
  // fetch count of user vers date

  const fetchUsersDate = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8080/api/v1/users/number");

      setUsersDate(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  // fetch data form Admin Login

  const adminLogin = async ({ password, email }) => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/v1/admin/signin",
        { email: email, password: password }
      );

      setAdminActive(res.data.data);
      sessionStorage.setItem("Admin", res.data.data._id);
      return res;
    } catch (err) {
      console.log(err);
      return err.response;
    }
  };
  // this for if admin refresh page
  useEffect(() => {
    fetchADmin();
    fetchUsersDate();
  }, []);
  const fetchADmin = async () => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8080/api/v1/admin/${sessionStorage.getItem("Admin")}`
      );

      setAdminActive(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  //   this function to fetch data user from api
  const fetchUserData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8080/api/v1/users");
      console.log(res.data.data);
      setUsersData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  //   this function to fetch ads data from api
  const fetchAdsData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8080/api/v1/ads");
      console.log(res.data.data);

      setAdsData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  //   this function to delete user from database
  const deleteUser = async (id) => {
    try {
      axios.delete(`http://127.0.0.1:8080/api/v1/users/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  //   this function to update status for ad
  const updateAds = async (id) => {
    try {
      const updateAds = axios.patch(
        `http://127.0.0.1:8080/api/v1/ads/status/${id}`,
        {
          status: "Accepted",
        }
      );
      console.log("adsUpdated", updateAds);
    } catch (err) {
      console.log(err);
    }
  };
  //    this function to delete Ad from database
  const deleteAds = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/api/v1/ads/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  // -----------
  const fetchPaidAds = async () => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8080/api/v1/account/getPaid`
      );
      setPaidAds(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  //  this use effect to run this function only in start server
  useEffect(() => {
    fetchAdsData();
    fetchUserData();
    fetchPaidAds();
  }, []);

  const value = {
    updateAds,
    deleteAds,
    deleteUser,
    usersData,
    setAdsData,
    setUsersData,
    adsData,
    adminLogin,
    adminActive,
    setAdminActive,
    usersDate,
    paidAds,
  };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}
