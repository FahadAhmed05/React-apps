import React, {useState, useRef} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import styles from './AddUser.module.css';
const AddUser = (props) => {
  const nameInputref = useRef();
  const ageInputref = useRef();
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(nameInputref.current.value, ageInputref.current.value);
        if(enteredUsername.trim() === 0 || enteredAge.trim().length === 0) {
          setError({
            title:'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
          })
          return;
        }
        if(+enteredAge < 1) {
          setError({
            title:'Invalid age',
            message: 'Please enter a valid age (> 0).'
          })
          return;
        }
       props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernameChangehandler = (event) => {
      setEnteredUsername(event.target.value);
    }
    const ageChangehandler = (event) => {
      setEnteredAge(event.target.value);
    }
    const addErrorHandler = () => {
      setError(null)
    }
  return (
    <>
  {error &&
   <ErrorModel title={error.title} 
   message={error.message} 
   onConfirm={addErrorHandler}/>}
    <Card className = {styles.input}>
     <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input type="text" id="username" ref={nameInputref} value={enteredUsername} onChange={usernameChangehandler}/>
        <label htmlFor="Age (year)">Age (year)</label>
        <input type="number" id="Age (year)" ref={ageInputref} value={enteredAge} onChange={ageChangehandler} />
        <Button type='submit'>Add User</Button>
        </form> 
        </Card>
    </>
  )
}
export default AddUser
