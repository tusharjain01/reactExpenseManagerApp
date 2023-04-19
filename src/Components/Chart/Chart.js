import React from "react";
import ChartBar from "./ChartBar"
import './Chart.css'

const Chart = (props)=>{

    const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalmMaximum = Math.max(...dataPointValue);

    return <div className="chart">
        {props.dataPoints.map(dataPoint => (<ChartBar 
            // Here we are using label as a key value
            key = {dataPoint.label} 
            value = {dataPoint.value}
            maxValue = {totalmMaximum}
            label = {dataPoint.label}
        />))}
    </div>

}

export default Chart;