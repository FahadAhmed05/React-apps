import React from 'react'
import Card from './Card';
import Button from './Button';
import Styles from './ErrorModel.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return <div className={Styles.backdrop} onClick={props.onConfirm}/>
};
const ModalOverLay = (props) => {
 return <Card className={Styles.modal}>
  <header className={Styles.header}>
      <h2>{props.title}</h2>
  </header>
  <div className={Styles.content}>
      <p>{props.message}</p>
  </div>
  <footer className={Styles.actions}>
   <Button onClick={props.onConfirm}>Okay</Button>
  </footer>
</Card>
}

const ErrorModel = (props) => {
  return (
      <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm}/>, 
        document.getElementById('backdrop-root'))}
          {ReactDOM.createPortal
          (<ModalOverLay 
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
          />, 
        document.getElementById('overlay-root'))}
      </React.Fragment>
  )
}

export default ErrorModel;
