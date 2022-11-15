import React from 'react'
import Chart from '../Chart/Chart';
const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label : 'jan', value:6},
        { label : 'Feb', value:4},
        { label : 'Mar', value:8},
        { label : 'Apr', value:9},
        { label : 'May', value:12},
        { label : 'Jun', value:15},
        { label : 'Jul', value:19},
        { label : 'Aug', value:3},
        { label : 'Sept', value:0},
        { label : 'Oct', value:16},
        { label : 'Nov', value:1},
        { label : 'Dec', value:2}
    ];
    for (const expense of props.expenses) {
        const expenseMonth =  expense.date.getMonth();
        chartDataPoints [expenseMonth].value += expense.amount;
    };
  return (
    <>
     <Chart dataPoints = {chartDataPoints}/>
    </>
  );
};

export default ExpensesChart; 
