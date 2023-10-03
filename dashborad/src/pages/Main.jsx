import React, { useContext } from "react";
import Box from "../component/main/Box";
import Chart from "../component/main/Chart";
import Chartt from "../component/main/Chartt";
import ApiContext from "../context/ApiContext";

export default function Main() {
  const { usersData, adsData, paidAds } = useContext(ApiContext);

  return (
    <main className="flex items-center justify-center p-6  min-h-screen flex-col gap-8">
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl ">
        <Box text={"Number of Users"} number={usersData.length} />
        <Box
          text={"Number of User Not Active"}
          number={usersData.filter((el) => el.active !== true).length}
        />
        <Box text={"Number of Ads"} number={adsData.length} />
        <Box text={"Number of Paid Ads"} number={paidAds.length} />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        <Chart />
        <Chartt />
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl ">
        <Box text={"Number of follow linkedin"} number={"+12500"} />
        <Box text={"Number of follow facebook"} number={"+10500"} />
        <Box text={"Number of follow instagram"} number={"+15000"} />
      </section>
    </main>
  );
}
