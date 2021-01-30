import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';

import './CounterDiv.css';

//creates forwardRef so method could be accessed from parent component
const CounterDiv = forwardRef((props, ref) => {
  const { setShow } = props;
  const [counter, setCounter] = useState(10);

  //reset counter function for parent component
  useImperativeHandle(ref, () => ({
    resetCount() {
      setCounter(10);
    },
  }));

  //starts counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  //if counter drops below 0 unmounts component
  useEffect(() => {
    if (counter <= 0) {
      setShow(false);
    }
  }, [counter, setShow]);

  return (
    <div className="counterDiv">
      <h1>{counter}</h1>
    </div>
  );
});

export default CounterDiv;
