import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../../Store/AuthContext';

function Home ()  {

  const authCtx = useContext(AuthContext)
  return (

    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button className={classes.button} onClick={authCtx.onLogout}>BACK</button>
    </Card>
    
  );
};

export default Home;
