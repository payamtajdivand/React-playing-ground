import React, { useState } from "react";

function FruitsList() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "PineApple"]);

  const handleAddFruit = () => {
    const selectedFruit = document.getElementById("fruitInput").value;
    document.getElementById("fruitInput").value = "";
    setFruits((f) => [...f, selectedFruit]);
  };

  // const handleRemoveFruit = (index) => {
  //   setFruits((_, i) => {
  //     fruits.filter(i !== index);
  //   });
  // };

  function handleRemoveFruit(index) {
    console.log(index);
    setFruits(fruits.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li
            value={fruit}
            key={index}
            onClick={() => handleRemoveFruit(index)}
          >
            {fruit}
          </li>
        ))}
      </ul>
      <input placeholder="Enter the fruit" id="fruitInput" />
      <button onClick={handleAddFruit}>Add fruit</button>
    </div>
  );
}

export default FruitsList;
