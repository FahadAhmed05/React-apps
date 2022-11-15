import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDateHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData)

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
   props.onAddExpense(expenseData);
   setIsEditing (false);
    };
   const startEditingHandler = () => {
    setIsEditing(true);
   };
   const stopEditingHandler = () => {
    setIsEditing (false);
  }
 
  return (
    <>
    <Card className='new-expense'>
      {!isEditing && <button className='new-expense-btn-2'
       onClick={startEditingHandler}>Add New <br /> Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}
      onCancel = {stopEditingHandler}/>}
      </Card>
    </>
  )
};

export default NewExpense;
