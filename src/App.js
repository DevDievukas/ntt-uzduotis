import React, { useState, useEffect, useRef } from 'react';

import CounterDiv from './CounterDiv/CounterDiv';

import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showMouseDiv, setShowMouseDiv] = useState(true);
  const counterRef = useRef();

  const colors = [
    'gray',
    'blue',
    'green',
    'yellow',
    'teal',
    'orange',
    'purple',
    'firebrick',
    'salmon',
    'aqua',
  ];

  //when component mounts adds event listeners to it to reset div counter and starts global counter
  useEffect(() => {
    window.addEventListener('mousemove', () => showDiv());
    window.addEventListener('click', () => showDiv());
    window.addEventListener('keydown', () => showDiv());
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  //shows counter div and resets its counter accessing method from child component
  const showDiv = () => {
    setShowMouseDiv(true);
    counterRef.current.resetCount();
  };

  return (
    <div className="App" style={{ backgroundColor: colors[counter % 10] }}>
      <h1>{counter}</h1>
      {showMouseDiv ? (
        <CounterDiv setShow={setShowMouseDiv} ref={counterRef} />
      ) : null}
    </div>
  );
};

export default App;
