import React from 'react';
import BackwardCounter from './components/BackwordCounter';
import ForwardCounter from './components/ForwardCounter';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
