import React from "react";
import Swal from "sweetalert2";

export default function Tables({ data, value }) {
  const handelDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        value(item);
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };
  const tag = data.map((el, index) => {
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
        <td className="px-6 py-4">{el.email}</td>
        <td className="px-6 py-4">
          {el.active === true ? "active" : "not Active"}
        </td>

        <td className="px-6 py-4   ">
          <button
            className="bg-red-500 p-2 text-white rounded-lg "
            onClick={() => handelDelete(el._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <>{tag}</>;
}
