import React from 'react';
import UseCounter from '../Hooks/UseCounter';
import Card from './Card';

const BackwardCounter = () => {
   const counter = UseCounter();
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
