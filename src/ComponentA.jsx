import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";
export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Adam");

  return (
    <div className="box">
      <p>component A</p>
      <p>hello {user}</p>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
