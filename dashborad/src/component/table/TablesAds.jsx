import React from "react";
import Swal from "sweetalert2";

export default function Tables({ adsData, value }) {
  const handelDelete = (item, text) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${text} it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        if (text === "delete") {
          value(item);
          Swal.fire("Deleted!", "Ads has been deleted.", "success");
        } else if (text === "Accepted") {
          value.handelAccepted(item);
          Swal.fire("Accepted!", "Ads has been Accepted.", "success");
        } else {
          value.handelRejected(item);
          Swal.fire("Rejected!", "Ads has been Rejected.", "success");
        }
      }
    });
  };
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
        <td className="px-6 py-4">{el.title}</td>
        <td className="px-6 py-4">{el.userId?.name}</td>
        <td className="px-6 py-4">{el.status}</td>
        {el.status === "Accepted" ? (
          <td
            className="px-6 py-4  "
            onClick={() => handelDelete(el._id, "delete")}
          >
            delete
          </td>
        ) : (
          <td className="px-6 py-4  ">
            <span onClick={() => handelDelete(el._id, "Accepted")}>Accept</span>
            <span onClick={() => handelDelete(el._id, "Reject")}>Reject</span>
          </td>
        )}
      </tr>
    );
  });
  return <>{ads}</>;
}
