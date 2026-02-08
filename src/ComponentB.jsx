import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className="box">
      <p>component B </p>

      <ComponentC />
    </div>
  );
}

export default ComponentB;
