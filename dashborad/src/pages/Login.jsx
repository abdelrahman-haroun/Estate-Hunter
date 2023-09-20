import React, { useState, useContext, useEffect } from "react";
import ApiContext from "../context/ApiContext";
import Logo from "../asesst/icon/Logo.png";
export default function Login() {
  const [jsReady, setJsReady] = useState(false);

  // Simulate a delay to mimic JavaScript loading
  useEffect(() => {
    setTimeout(() => {
      setJsReady(true);
    }, 1000);
  }, []);
  const [formData, setFormData] = useState({});
  const { adminLogin } = useContext(ApiContext);

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    adminLogin(formData);
  };
  return (
    <>
      {jsReady ? (
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img
                className="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              Estate Hunter
            </p>
            <div className="w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                      value={formData.email}
                      onChange={handelChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={formData.password}
                      onChange={handelChange}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    onClick={handelSubmit}
                    className="w-full text-white   focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800 bg-blue-500"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>loading....</div>
      )}
    </>
  );
}
