import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props)=>{

    const chartDataPoints = [
        {label : 'Jan', value : 0},       
        {label : 'Feb', value : 0},       
        {label : 'Mar', value : 0},       
        {label : 'Apr', value : 0},       
        {label : 'May', value : 0},       
        {label : 'Jun', value : 0},       
        {label : 'July', value : 0},       
        {label : 'Aug', value : 0},       
        {label : 'Sept', value : 0},       
        {label : 'Oct', value : 0},       
        {label : 'Nov', value : 0},       
        {label : 'dec', value : 0}
    ]

    for(const expense of props.expense){
        const ExpenseMonth = expense.date.getMonth(); //starting at 0 => jaunary  = 0
        chartDataPoints[ExpenseMonth].value += expense.amount;
    }
    return <Chart dataPoints = {chartDataPoints}/>
}

export default ExpensesChart;