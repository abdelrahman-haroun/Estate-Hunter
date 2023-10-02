import React from "react";
import TablePaid from "../component/table/TablePaid";
import { useContext } from "react";
import ApiContext from "../context/ApiContext";

export default function AdsAccepted() {
  const { paidAds } = useContext(ApiContext);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              CreatedAt
            </th>
            <th scope="col" className="px-6 py-3">
              image
            </th>
            <th scope="col" className="px-6 py-3">
              status
            </th>
          </tr>
        </thead>
        <tbody>
          <TablePaid adsData={paidAds} />
        </tbody>
      </table>
    </div>
  );
}
