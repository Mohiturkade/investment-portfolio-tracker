// import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebaseConfig";
// import { getAuth } from "firebase/auth";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const PieChart = () => {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         // ✅ Step 1: Get current user ID
//         const auth = getAuth();
//         const user = auth.currentUser;

//         if (!user) {
//           console.log("No user logged in");
//           return;
//         }

//         // ✅ Step 2: Access the user's 'assets' subcollection
//         const userAssetsRef = collection(db, "assets", user.uid, "assets");
//         const querySnapshot = await getDocs(userAssetsRef);

//         const assetTotals = {};

//         // ✅ Step 3: Loop through documents and group by 'type'
//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           const { type, currentPrice } = data;

//           if (type && currentPrice) {
//             assetTotals[type] = (assetTotals[type] || 0) + Number(currentPrice);
//           }
//         });

//         // ✅ Step 4: Prepare chart data
//         const data = {
//           labels: Object.keys(assetTotals),
//           datasets: [
//             {
//               label: "Investment Distribution",
//               data: Object.values(assetTotals),
//               backgroundColor: [
//                 "#36A2EB",
//                 "#FF6384",
//                 "#FFCE56",
//                 "#4BC0C0",
//                 "#9966FF",
//               ],
//               borderColor: "#fff",
//               borderWidth: 2,
//             },
//           ],
//         };

//         setChartData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchChartData();
//   }, []);

//   // ✅ Step 5: Define chart display options
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.label}: ₹${context.raw}`,
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: "100%", maxWidth: 400, margin: "auto" }}>
//       <h3 className="text-xl font-semibold text-center mb-4">
//         Portfolio Breakdown
//       </h3>
//       {chartData ? (
//         <Pie data={chartData} options={options} />
//       ) : (
//         <p>Loading chart...</p>
//       )}
//     </div>
//   );
// };

// export default PieChart;



import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        console.log("No user logged in");
        return;
      }

      try {
        console.log("Fetching data for:", user.uid);
        const userAssetsRef = collection(db, "assets", user.uid, "assets");
        const querySnapshot = await getDocs(userAssetsRef);

        const assetTotals = {};

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log("Doc:", data);
          const { type, currentPrice } = data;

          if (type && currentPrice) {
            assetTotals[type] = (assetTotals[type] || 0) + Number(currentPrice);
          }
        });

        if (Object.keys(assetTotals).length === 0) {
          console.log("No asset data found");
          return;
        }

        setChartData({
          labels: Object.keys(assetTotals),
          datasets: [
            {
              data: Object.values(assetTotals),
              backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
              borderColor: "#fff",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: 400, margin: "auto" }}>
      <h3 className="text-xl font-semibold text-center mb-4">
        Portfolio Breakdown
      </h3>
      {chartData ? (
        <Pie data={chartData} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default PieChart;








