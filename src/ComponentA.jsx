import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  const [user, setUser] = useState("Joe");

  return (
    <div className="box">
      <p>component A</p>
      <p>hello {user}</p>
      <ComponentB user={user} />
    </div>
  );
}

export default ComponentA;
