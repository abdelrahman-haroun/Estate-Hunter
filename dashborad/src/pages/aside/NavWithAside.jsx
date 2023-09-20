import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../../context/ApiContext";

export default function NavWithAside() {
  const { setAdminActive } = useContext(ApiContext);

  const [isDropDown, setIsDropDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        onClick={() => (isOpen == true ? setIsOpen(false) : "")}
        className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <img
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                src="https://flowbite.com/docs/images/logo.svg"
                className="inline-flex h-8 mr-3 items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                alt="FlowBite Logo"
              />
              <span className="sr-only">Open sidebar</span>

              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3 hidden sm:block"
                alt="FlowBite Logo"
                type="button"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl  whitespace-nowrap dark:text-white">
                ESTATE-HUNTER
              </span>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isOpen || "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">Main</span>
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => {
                  setIsDropDown(!isDropDown);
                }}
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Advertisement
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={` py-2 space-y-2 ${isDropDown || "hidden"}`}
              >
                <li>
                  <Link
                    to="/adsAccepted"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Active
                  </Link>
                </li>
                <li>
                  <Link
                    to="/adsPending"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Pending
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
              </a>
            </li>

            <li>
              <p className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span
                  className="flex-1 ml-3 whitespace-nowrap"
                  onClick={() => {
                    sessionStorage.clear();
                    setAdminActive({});
                  }}
                >
                  Sign Out
                </span>
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
