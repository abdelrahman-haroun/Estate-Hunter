import React from "react";
import Box from "../component/main/Box";
import Chart from "../component/main/Chart";
import Chartt from "../component/main/Chartt";
export default function Main() {
  return (
    <main className="flex items-center justify-center p-6  min-h-screen flex-col gap-8">
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl ">
        <Box />
        <Box />
        <Box />
        <Box />
      </section>
      <section className="  grid sm:grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        <Chart />

        <Chartt />
      </section>
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl ">
        <Box />
        <Box />
        <Box />
      </section>
    </main>
  );
}
