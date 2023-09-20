import React from "react";
import Tables from "../component/table/Tables";
import ApiContext from "../context/ApiContext";
import { useContext } from "react";

export default function Users() {
  const { deleteUser, usersData, setUsersData } = useContext(ApiContext);
  const DeleteUser = (id) => {
    deleteUser(id);
    setUsersData(
      usersData.filter((el) => {
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
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              PhoneNumber
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <Tables data={usersData} value={DeleteUser} />
        </tbody>
      </table>
    </div>
  );
}
