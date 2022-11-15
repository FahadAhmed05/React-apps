import React from 'react';
import UseCounter from '../Hooks/UseCounter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = UseCounter(false)

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
