import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Calculator() {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handleDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div className="calculator">
      <div className="circle">{number}</div>
      <div className="button-container">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    </div>
  );
}

const App = (
  <div className="main">
    <Calculator />
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
