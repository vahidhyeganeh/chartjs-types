import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {

  let option = {
    title: {
      display: props.displayTitle,
      text: "Test",
      fontSize: 25,
    },
    legend: {
      display: props.displayLegend,
      position: props.legendPosition,
      labels: {
        fontColor: "#000",
      },
    },

    plugins: {
      datalabels: {
        display: false,
      },
    },
    scales: {
      xAxes: [{
        barPercentage: 0.3
      }]
    }
  };

  return (
    <div>
      <Bar data={props.chartData} options={option} />
    </div>
  );
};

export default BarChart;
