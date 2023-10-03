import React from "react";
import { Chart } from "react-google-charts";
import { useContext } from "react";
import ApiContext from "../../context/ApiContext";

export default function App() {
  const { adsData } = useContext(ApiContext);
  const Acc = adsData.filter((el) => {
    return el.status === "Accepted";
  });
  const Pen = adsData.filter((el) => {
    return el.status !== "Accepted";
  });
  const data = [
    ["Ads", "Hours per Day"],
    ["Ads Pending", Pen.length],
    ["Ads Active", Acc.length],
  ];

  const options = {
    title: "Advertisement Overview ",
    is3D: true,
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
