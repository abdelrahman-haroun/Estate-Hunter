import React from "react";
import { Chart } from "react-google-charts";
import ApiContext from "../../context/ApiContext";
import { useContext } from "react";

export default function App() {
  const { usersDate } = useContext(ApiContext);
  console.log(usersDate);
  const data = [["Date(dd/mm/yy)", "Number Of Users"]];

  for (let i = 0; i < usersDate.length; i++) {
    data.push(usersDate[i]);
  }

  const options = {
    chart: {
      title: "Users",
      subtitle: "day",
    },
  };
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
