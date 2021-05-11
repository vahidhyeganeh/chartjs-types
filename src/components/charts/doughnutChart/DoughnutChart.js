import {useEffect} from "react";
import {Doughnut} from "react-chartjs-2";
import Chart from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Text inside doughnut
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
        originalDoughnutDraw.apply(this, arguments);

        var chart = this.chart.chart;
        var ctx = chart.ctx;
        var width = chart.width;
        var height = chart.height;

        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em Verdana";
        ctx.textBaseline = "middle";

        var text = chart.config.data.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

        ctx.fillText(text, textX, textY);
    },
});

const DoughnutChart = (props) => {

    const cutoutPercentage=props.cutoutPercentage ? props.cutoutPercentage:80;
    const widthSize = props.widthSize ? props.widthSize:'80';


    const option = {
        cutoutPercentage: cutoutPercentage,
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
                boxWidth: 11,
            },
        },
        tooltips: {
            enabled: true,
            callbacks: {
                label: function (tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var total = dataset.data.reduce(function (
                        previousValue,
                        currentValue,
                        currentIndex,
                        array
                    ) {
                        return 'previousValue + currentValue';
                    });
                    var currentValue = dataset.data[tooltipItem.index];
                    var percentage = Math.floor((currentValue / total) * 100 + 0.5);
                    return percentage + "%";
                },
                title: function (tooltipItem, data) {
                    return data.labels[tooltipItem[0].index]
                },
            },
            mode: "index",
            intersect: true,
        },
        elements: {
            arc: {
                borderWidth: props.borderWidth ? props.borderWidth : '5',
                borderColor:props.borderColor,
            },
        },

        plugins: {
            ChartDataLabels,
            datalabels: {
                display: props.datalabels,
                color: props.chartData.datasets[0].backgroundColor,
                // render: "percentage",
            },
        },
    }

    return (
        <div style={{width:widthSize}} >
            <Doughnut
                data={props.chartData}
                options={option}
            />

        </div>
    );
};

export default DoughnutChart;