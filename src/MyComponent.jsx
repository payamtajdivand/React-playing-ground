import React, { useState, useRef, useEffect } from "react";

function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Componet Rendered");
  });

  function handleClick1() {
    inputRef1.current.style.backgroundColor = "hsla(200, 80%, 50%, 0.5)";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";

    inputRef1.current.focus;
  }
  function handleClick2() {
    inputRef2.current.style.backgroundColor = "hsla(200, 80%, 50%, 0.5)";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";

    inputRef2.current.focus;
  }

  function handleClick3() {
    inputRef3.current.style.backgroundColor = "hsla(200, 80%, 50%, 0.5)";
    inputRef2.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "";

    inputRef3.current.focus;
  }

  return (
    <div>
      <>
        <button onClick={handleClick1}>Click me</button>
        <input type="text" ref={inputRef1} />
      </>
      <br />
      <>
        <button onClick={handleClick2}>Click me</button>
        <input type="text" ref={inputRef2} />
      </>
      <br />

      <>
        <button onClick={handleClick3}>Click me</button>
        <input type="text" ref={inputRef3} />
      </>
    </div>
  );
}

export default MyComponent;
