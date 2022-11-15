
import useInput from "../hooks/useInput";

const BasicForm = () => {

  const inputValues = (value) => value.trim() !== '';
  const isNotEmpty = (value) => value.includes('@');

    const { 
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstInputHasError,
        valueChangeHandler: firstNameChangeHandler,
        reset: resetFirstNameInput,
        inputBlurHandler: firstNameBlurHandler,
     } = useInput(inputValues);
     const { 
      value: lastNameValue,
      isValid: lastNameIsValid,
      hasError: lastInputHasError,
      valueChangeHandler: lastNameChangeHandler,
      reset: resetLastNameInput,
      inputBlurHandler: lastNameBlurHandler,
   } = useInput(inputValues);

     const {
      value: enteredEmailValue,
      isValid: enteredEmailIsValid,
      hasError: emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      reset: resetEmailInput
     } = useInput(isNotEmpty);

    let formIsValid= false;
  
        if(firstNameIsValid && lastNameIsValid && enteredEmailIsValid){
            formIsValid=true;
        };
    const formSubmissionHandler = (event) => {
        event.preventDefault();

         if(!formIsValid){
          return;
         };

         console.log('Submitted!');
        console.log(firstNameValue, lastNameValue, enteredEmailValue);
        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    };

    const firstNameInputClasses = firstInputHasError
     ? 'form-control invalid' 
     : 'form-control';

     const lastNameInputClasses = lastInputHasError
     ? 'form-control invalid' 
     : 'form-control';

     const emailInputClasses = emailInputHasError
     ? 'form-control invalid' 
     : 'form-control';
    return (
      <form onSubmit={formSubmissionHandler}>
        <div className='control-group'>
          <div className={firstNameInputClasses}>
            <label htmlFor='FirstName'>First Name</label>
            <input type='text'
             id='FirstName' 
             value={firstNameValue}
             onChange={firstNameChangeHandler}
             onBlur={firstNameBlurHandler}
            />
             {firstInputHasError && 
             (<p className="error-text">First name must not be empty.</p>)}
          </div>
          <div className={lastNameInputClasses}>
            <label htmlFor='LastName'>Last Name</label>
            <input type='text'
             id='LastName'
             value={lastNameValue}
             onChange={lastNameChangeHandler}
             onBlur={lastNameBlurHandler}
              />
             {lastInputHasError && 
             (<p className="error-text">Last name is must not be empty.</p>)}
          </div>
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='Email'>E-Mail Address</label>
          <input type='email' 
          id='Email' 
          value={enteredEmailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          />
          {emailInputHasError && 
          (<p className="error-text">Please enter a valid E-Mail address</p>)}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;
  