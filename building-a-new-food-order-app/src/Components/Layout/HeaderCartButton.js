import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import cartContext from '../Store/Cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [btnHighlighted, setButtonHighlighted] = useState(false);

   const cartCtx = useContext(cartContext);

   const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount
   }, 0);

   const btnClasses =`${classes.button} ${btnHighlighted ? classes.bump: ''}`;

   useEffect(() => {
    if(cartCtx.items.length === 0){
      return;
    }
    setButtonHighlighted(true);

   const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    }
   }, [cartCtx]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
