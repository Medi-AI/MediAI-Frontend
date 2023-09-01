import React from "react";
import Chart from "react-apexcharts";

const Barchart = ({ output }) => {
  const outputArray = output.output;

  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: outputArray.slice(0, 5).map((ele) => {
        return ele[0];
      }),
    },
  };

  const series = [
    {
      name: "Disease",
      data: outputArray.slice(0, 5).map((ele) => {
        return (ele[1] * 100).toPrecision(2);
      }),
    },
  ];
  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width={480}
      height={230}
    />
  );
};

export default Barchart;
