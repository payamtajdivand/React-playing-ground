import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };
  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="counter-text">{count}</p>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
