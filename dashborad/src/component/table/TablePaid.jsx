import React from "react";

export default function Tables({ adsData }) {
  const ads = adsData.map((el, index) => {
    return (
      <tr
        key={el._id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {index + 1}
        </th>
        <td className="px-6 py-4">{el.name}</td>
        <td className="px-6 py-4">{el.createdAt}</td>
        <td className="px-6 py-4">
          <img src={el.img} className="w-14 h-8" />
        </td>

        <td className="px-6 py-4">
          {el.status === true ? "Active" : "Not Active"}
        </td>
      </tr>
    );
  });
  return <>{ads}</>;
}
