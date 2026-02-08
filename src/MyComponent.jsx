import React, { useState, useRef, useEffect } from "react";

function MyComponent() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Componet Rendered");
  });

  function handleClick() {
    setCount((c) => c + 1);
  }

  return <button onClick={handleClick}>Click me</button>;
}

export default MyComponent;
