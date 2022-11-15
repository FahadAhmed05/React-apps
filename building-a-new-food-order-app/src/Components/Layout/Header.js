import React, { Fragment } from 'react'
import Meals_img from '../../Assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    
  return (
   <Fragment>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
      <img src={Meals_img} alt="A table is full of delicious food!" />
    </div>
   </Fragment>
  )
};

export default Header
