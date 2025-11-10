
import React, { useEffect, useState } from "react";

function CryptoPrice({ coin = "bitcoin" }) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchCrypto = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
      );
      const data = await res.json();
      setPrice(data[coin].usd);
    };
    fetchCrypto();

    // update every 30 seconds
    const interval = setInterval(fetchCrypto, 30000);
    return () => clearInterval(interval);
  }, [coin]);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "250px" }}>
      <h4>{coin.toUpperCase()} Price</h4>
      {price ? <p>${price}</p> : <p>Loading...</p>}
    </div>
  );
}

export default CryptoPrice;
