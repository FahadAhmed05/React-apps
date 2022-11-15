import React, { useState } from 'react';
import './Expenses.css';
import ExpenseFilter from '../NewExpenses/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filteredChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpenses)
    return (
    <>
    <Card className="expenses">
      <ExpenseFilter selected = {filteredYear} onChangeFilter={filteredChangeHandler}/>
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpenseList items = {filteredExpenses}/>
     </Card>
    </>
  )
};

export default Expenses;