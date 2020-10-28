import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {


  const [counter, setCounter] = useState(value)

  const handleAdd = (e) => {
    setCounter(counter + 1)
  }

  const handleSubsctract = (e) => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>1+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubsctract}>-1</button>
    </div>
  );
}

CounterApp.prototype = {
  value: PropTypes.number
}

export default CounterApp
  ;
