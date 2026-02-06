import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setcount] = useState(0);
  const [color, setColor] = useState("green");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    document.title = `Count: ${count} Color: ${color} TextColor: ${textColor}`;
  }, [color, count, textColor]);

  function addNumber() {
    setcount((c) => c + 1);
  }

  function subtractNumber() {
    setcount((c) => c - 1);
  }

  const handleClick = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
    setTextColor((t) => (t === "white" ? "black" : "white"));
  };

  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addNumber}>Add</button>
      <button onClick={subtractNumber}>Subtract</button>
      <br />
      <button
        onClick={handleClick}
        style={{ backgroundColor: color, color: textColor }}
      >
        Change Color
      </button>
    </div>
  );
}

export default MyComponent;
