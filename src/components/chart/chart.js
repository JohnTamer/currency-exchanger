//V.IMP ==> the api i use dont support historical data free , i should pay to get this data , so i used chart.js library and make every thing except the
// part of getting the data from the api      <== V.IMP

import "./chart.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import { useEffect, useState } from "react";
// import axios from "axios";
ChartJS.register(CategoryScale, LinearScale, BarElement);
export const Chart = () => {
  // const [chart, setChart] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://v6.exchangerate-api.com/v6/b3a5dde5ff3fa01bf5e615a8/history/ALL/2020/2/22`
  //     )
  //     .then((response) => {
  //       console.log(response.data.conversion_rates);

  //       setChart(response.data.conversion_rates);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  let data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 5, 9, 8, 10, 5, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  let options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: { fontSize: 26 },
    },
  };

  return (
    <div className="chart">
      <Bar data={data} options={options} height={400} />
    </div>
  );
};
