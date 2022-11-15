import React, {useState} from 'react'
import './App.css';
import Expenses from './Expenses/Expenses';
import NewExpense from './NewExpenses/NewExpense';
//   let myName='Fahad';
//   console.log(myName);
//   let yourName='hamza';
//   const person ={
//     name : 'Fahad'
//   };
//   const newPerson={
//     ...person ,
//     age:17
//   };
//   const numbers=[1,2,3];
//  const [num1,num2]=numbers;
//   console.log(yourName);
//   console.log(newPerson);
//   console.log(num1 , num2);
     const DUMMY_EXPENSES = [
      {
        id : 'e1',
        title:'Toilet Paper',
        amount:'94.12',
        date:new Date(2021, 2, 31)
      },
      {
        id : 'e2',
        title:'News TV',
        amount:'799.49',
        date:new Date(2020, 6, 11)
      },
      {
        id : 'e3',
        title:'Car Insurance',
        amount:'294.67 ',
        date:new Date(2023, 1, 1)
      },
      {
        id : 'e4',
        title:'New Bike',
        amount:'500.49',
        date:new Date(2022, 5, 31)
      }
  ];
  const App = () => {
     const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
     const addExpenseHandler = expense => {
      console.log(expense)
      setExpenses((prevExpense) => {
        return [expense, ...prevExpense];
      });
     };
     
  return (
    <>
    <NewExpense onAddExpense = {addExpenseHandler}/>
    <Expenses items = {expenses}/>
</>
);
};
export default App;
