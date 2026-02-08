import React, { useContext } from "react";

function ComponentD(props) {
  return (
    <div className="box">
      <p>component D</p>
      <p>Bye {props.user}</p>
    </div>
  );
}

export default ComponentD;
