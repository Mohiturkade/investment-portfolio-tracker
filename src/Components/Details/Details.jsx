import React from "react";
import PieChart from "../PieChart/PieChart.jsx";
import LineGraph from "../LineGraph/LineGraph.jsx";
function Details() {
 return(
    <div>
        <div style={{display: "flex" , alignItems: "center" , justifyContent:"center" , gap:"25px"}}>
        <PieChart/>
        <LineGraph/>
        </div>
    </div>

 )   
}
export default Details