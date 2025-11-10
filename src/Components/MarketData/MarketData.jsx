import React from "react";
import "./MarketData.css";
import LineGraph from "../LineGraph/LineGraph.jsx";
import StockPrice from "../StockPrice/StockPrice.jsx";
import CryptoPrice from "../CryptoPrice/CryptoPrice.jsx";

function MarketData() {
  return(
    <div className="marketdata-container">
    <h1>Live Market Price</h1>
    <StockPrice/>
    <CryptoPrice/>
    </div>
  )
}

export default MarketData;