import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <p>component D</p>
      <p>Bye {user} </p>
    </div>
  );
}

export default ComponentD;
