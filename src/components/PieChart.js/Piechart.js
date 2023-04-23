import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const Piechart = ({ output }) => {
  if (output) {
    console.log("Output recieved");
  }
  console.log("First");
  let data = [];

  const filtered_output_array = output.filtered_output;
  const outputArray = output.output;

  console.log("Second");

  const defaultLabelStyle = {
    fontSize: "4px",
    fill: "white",
    fontFamily: "sans-serif",
  };

  data = [
    {
      title: filtered_output_array[0][0],
      value: filtered_output_array[0][1],
      color: "#2a2f4f",
    },
    {
      title: filtered_output_array[1][0],
      value: filtered_output_array[1][1],
      color: "#917fb3",
    },
    {
      title: filtered_output_array[2][0],
      value: filtered_output_array[2][1],
      color: "#e5beec",
    },
  ];
  return (
    <PieChart
      labelStyle={{
        ...defaultLabelStyle,
      }}
      label={({ dataEntry }) => dataEntry.title}
      data={data}
    />
  );
};

export default Piechart;
