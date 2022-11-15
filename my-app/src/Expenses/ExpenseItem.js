import React, { useState } from 'react';
import '../Expenses/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props){
//  const [title, setTitle] = useState(props.title);
//   const clickHandler = () => {
//     setTitle('Updated!!!');
//     console.log(title);
//   };
  // document.getElementById('root').addEventListener()
  console.log('Date :', props)
    return (
       <>
         <Card className='Expense-Item'>
           <ExpenseDate date = {props.date}/>
           <div className='Expense-item-discription'>
             <h2>{props.title}</h2>
             <p className='expense-item-price'>${props.amount}</p>
           </div>
           {/* <button>Change Title</button> */}
         </Card>
        </>
    );
}


export default ExpenseItem;
