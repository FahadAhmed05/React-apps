import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
   const [enteredtitle, setEnteredTitled] =useState('');
   const [enteredAmount, setEnteredAmount] =useState('');
   const [enteredDate, setEnteredDate] =useState('');
    const titleChangeHandler = (event) => {
       setEnteredTitled(event.target.value);
   };
      const amountChangeHandler = (event) => {
         setEnteredAmount(event.target.value);
      };

      const dateChangeHandler = (event) => {
         setEnteredDate(event.target.value);
      }
    const onSubmitHandler =(event) => {
      event.preventDefault();
      const expenseData = {
         title: enteredtitle,
         amount: +enteredAmount,
         date:new Date(enteredDate)
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitled('');
      setEnteredAmount('');
      setEnteredDate('');
    };
    
  return (
    <>
     <form onSubmit={onSubmitHandler}>
         <div className='new-expense-controls'>
           <div className='new-expense-control'>
              <label>Title</label>
              <input type="text" onChange={titleChangeHandler} />
           </div>
           <div className='new-expense-control'>
              <label>Amount</label>
              <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
           </div>
           <div className='new-expense-control'>
              <label>Date</label>
              <input value={enteredDate} type="date" min="2019-1-01" max="2024-1-01" onChange={dateChangeHandler}/>
           </div>
         </div>
         <div>
            <button className='cancel-btn' onClick={props.onCancel} type='button'>Cancel</button>
            <button className='add-expense-btn' type='submit'>Add Expense</button>
         </div>
         </form> 
    </>
  )
}

export default ExpenseForm;
