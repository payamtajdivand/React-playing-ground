import React, { useState } from "react";

function MyComponent() {
  let [name, setName] = useState("Guest");
  let [age, setAge] = useState(0);
  let [isImployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Jack");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const toggleEmployed = () => {
    setIsEmployed(!isImployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={updateAge}>Increment Age</button>
      <p>Are you Employed: {isImployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployed}>toggle your job state</button>
    </div>
  );
}

export default MyComponent;
