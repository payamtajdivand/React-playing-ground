import React, { useState } from "react";

function FavoriteCar() {
  const [car, setCar] = useState({
    make: "Fiat",
    model: "M21",
    year: 2022,
  });

  const handleYearChange = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };
  const handleMakeChange = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };
  const handleModelChange = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  return (
    <div>
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>
      <input
        type="number"
        value={car.year}
        onChange={handleYearChange}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <input
        type="text"
        value={car.make}
        onChange={handleMakeChange}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
}

export default FavoriteCar;
