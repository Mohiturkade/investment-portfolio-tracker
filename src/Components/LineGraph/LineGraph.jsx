import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./LineGraph.css";

// Register Chart.js components for Line Graph
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

function LineGraph() {
  // Dummy data — you’ll replace it later with live API data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Portfolio Value ($)",
        data: [10000, 12000, 11000, 14000, 13500, 15000, 16000],
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4, // smooth curve
        fill: true,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#36A2EB",
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#333",
          font: { size: 14 },
        },
      },
      title: {
        display: true,
        text: "Portfolio Performance Over Time",
        color: "#222",
        font: { size: 16, weight: "bold" },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#333" },
      },
      y: {
        grid: { color: "#e0e0e0" },
        ticks: { color: "#333" },
      },
    },
  };

  return (
    <div className="linegraph-container">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineGraph;


