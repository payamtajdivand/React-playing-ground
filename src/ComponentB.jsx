import React, { useContext } from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  console.log(props.user);
  return (
    <div className="box">
      <p>component B</p>

      <ComponentC user={props.user} />
    </div>
  );
}

export default ComponentB;
