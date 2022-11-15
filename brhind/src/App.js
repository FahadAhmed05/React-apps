import React, { useState, useCallback, useMemo } from 'react';
import Button from './Component/UI/button/button';
import DemoList from './Component/UI/button/Demo/DemoList'; 
import './App.css';

function App() {
  const [listTitle, setListTitle] = useState('Our List');
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);
  const ListItems = useMemo(() =>  [7, 3, 1, 10, 9], [])
  return (
    <div className="app">
      <DemoList title={listTitle} items={ListItems}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
