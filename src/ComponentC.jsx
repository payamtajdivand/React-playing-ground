import React, { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";

function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <p>component C</p>
      <p>hello again {user}</p>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
