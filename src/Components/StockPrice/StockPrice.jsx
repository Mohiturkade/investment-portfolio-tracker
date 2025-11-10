import React, { useEffect, useState } from "react";

function StockPrice({ symbol = "AAPL" }) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchStock = async () => {
      const API_KEY = "YOUR_API_KEY";
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setPrice(data["Global Quote"]["05. price"]);
    };
    fetchStock();

    // 🔁 Update every 60 seconds
    const interval = setInterval(fetchStock, 60000);
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "250px" }}>
      <h4>{symbol} Live Price</h4>
      {price ? <p>${parseFloat(price).toFixed(2)}</p> : <p>Loading...</p>}
    </div>
  );
}

export default StockPrice;