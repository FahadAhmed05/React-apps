import React, { useState} from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
const App = () => {
  const [UsersList, setUsersList] =  useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name:uName, age:uAge, id: Math.random().toString() }]
    })
  }
  return (
    <React.Fragment>
   <AddUser onAddUser = {addUserHandler}/>
   <UserList users = {UsersList}/>
   </React.Fragment>
  );
}

export default App;
