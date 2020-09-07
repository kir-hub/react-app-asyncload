import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Counter(prop) {
  const { step } = prop;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setCount((prevCountValue) => prevCountValue + step);
    };
    document.body.addEventListener('dblclick', handleClick);
    return () => {
      document.body.removeEventListener('dblclick', handleClick);
    };
  }, [step]);

  const funIncrement = () => {
    setCount(count + step);
  };
  const funDecrement = () => {
    setCount(count - step);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={funDecrement}>-</button>
      <button onClick={funIncrement}>+</button>
    </div>
  );
}

Counter.propTypes = {
  step: PropTypes.number,
};
Counter.defaultProps = {
  step: 1,
};

export default Counter;
