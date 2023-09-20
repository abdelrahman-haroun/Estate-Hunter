import React from "react";
import TablesAds from "../component/table/TablesAds";
import { useContext } from "react";

import ApiContext from "../context/ApiContext";
export default function AdsPending() {
  const { adsData, setAdsData, deleteAds, updateAds } = useContext(ApiContext);
  const data = adsData.filter((el) => {
    return el.status == "pending";
  });

  const handelAccepted = (id) => {
    updateAds(id);
    setAdsData(
      adsData.map((el) => {
        if (el._id === id) {
          el.status = "Accepted";
        }
        return el;
      })
    );
  };
  const handelRejected = (id) => {
    deleteAds(id);
    setAdsData(
      adsData.filter((el) => {
        return el._id !== id;
      })
    );
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              User
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <TablesAds
            adsData={data}
            value={{ handelAccepted, handelRejected }}
          />
        </tbody>
      </table>
    </div>
  );
}
