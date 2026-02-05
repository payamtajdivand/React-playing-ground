import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());

  function handleYearChange(event) {
    setYear(event.target.value);
  }
  function handleMakeChange(event) {
    setMake(event.target.value);
  }
  function handleModelChange(event) {
    setModel(event.target.value);
  }

  function handleAddCar() {
    const newCar = { year: year, make: make, model: model };
    setCars([...cars, newCar]);
    setMake("");
    setYear(new Date().getFullYear());
    setModel("");
  }

  function handleRemoveCar(index) {
    setCars(cars.filter((element, i) => i !== index));
  }

  return (
    <div>
      <h2> List of Cars</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={year} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        placeholder="Enter car factory"
        value={make}
        onChange={handleMakeChange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter car model"
        value={model}
        onChange={handleModelChange}
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MyComponent;
