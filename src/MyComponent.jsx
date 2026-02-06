import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setcount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} Color: ${color}`;
  }, [color, count]);

  function addNumber() {
    setcount((c) => c + 1);
  }

  function subtractNumber() {
    setcount((c) => c - 1);
  }

  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addNumber}>Add</button>
      <button onClick={subtractNumber}>Subtract</button>
      <br />
      <button onClick={changeColor} style={{ backgroundColor: color }}>
        Change Color
      </button>
    </div>
  );
}

export default MyComponent;
