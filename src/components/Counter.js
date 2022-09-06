import React from 'react';

export default function Counter() {
  const [value,setValue] =React.useState(0);
  function increment(){
    setValue(value + 1);
  }
  function decrement(){
    if(value <=0){
      return 0;
    }
    setValue(value - 1);
  }
  function reset(){
    setValue(0);
  }
 

  return (
    <>
    <p className='counter-text'>{value}</p>
    <button className="counter-btn" onClick={increment}>Increment</button>
    <button className="counter-btn" onClick={decrement}>Decrement</button>
    <button className="counter-btn" onClick={reset}>Reset</button>
    </>
  );
}
