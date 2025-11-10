import React from "react";
import "./Home.css";
import PieChart from "../../Components/PieChart/PieChart.jsx";
import LineGraph from "../../Components/LineGraph/LineGraph.jsx";
import MarketData from "../../Components/MarketData/MarketData.jsx";

function Home() {
  return (
    <div className="home-container">
      <div className="left-column">
        <PieChart />
      </div>

      <div className="right-column">
        <div className="top-row">
          <LineGraph />
        </div>
        <div className="bottom-row">
          <MarketData />
        </div>
      </div>
    </div>
  );
}

export default Home;


