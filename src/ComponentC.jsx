import React, { useContext } from "react";
import ComponentD from "./ComponentD";

function ComponentC(props) {
  return (
    <div className="box">
      <p>component C</p>
      <ComponentD user={props.user} />
    </div>
  );
}

export default ComponentC;
