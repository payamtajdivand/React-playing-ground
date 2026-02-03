function List() {
  const fruits = [
    { id: 1, name: "banana", calories: 100 },
    { id: 2, name: "apple", calories: 220 },
    { id: 3, name: "orange", calories: 332 },
    { id: 4, name: "kiwi", calories: 60 },
    { id: 5, name: "pine apple", calories: 42 },
  ];
  //fruits.sort((a, b) => a.calories - b.calories); //sort numeric lower to higher
  //fruits.sort((a, b) => b.calories - a.calories); //sort numeric higher to lower
  //fruits.sort((a, b) => a.name.localeCompare(b.name)); // sort alphabets a to z
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // sort alphabets z to a
  fruits.sort((a, b) => b.calories - a.calories);

  //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100); //low cal fruits
  // const highCalFruits = fruits.filter(
  //   (highCalFruit) => highCalFruit.calories >= 100,
  // ); high cal fruits

  const fruitList = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));

  return <ol>{fruitList}</ol>;
}

export default List;
