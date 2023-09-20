import React from "react";

export default function Tables({ data, value }) {
  const tag = data.map((el) => {
    return (
      <tr
        key={el._id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {el._id}
        </th>
        <td className="px-6 py-4">{el.name}</td>
        <td className="px-6 py-4">{el.email}</td>
        <td className="px-6 py-4">{el.phoneNumber}</td>

        <td className="px-6 py-4  " onClick={() => value(el._id)}>
          delete
        </td>
      </tr>
    );
  });
  return <>{tag}</>;
}
