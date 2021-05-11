import React from "react";
import { Pie } from "react-chartjs-2";
import testJson from './../testJson.json'
const PieChart = (props) => {
  return (
    <div>
      <Pie
        data={testJson}
        options={{
          title: {
            display: props.displayTitle,
            text: "Text",
            fontSize: 25,
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
            labels: {
              fontColor: "#000",
            },
          },
        }}
      />
    </div>
  );
};

PieChart.defaultProps = {
  displayTitle: true,
  displayLegend: true,
  legendPosition: "bottom",
};

export default PieChart;
