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
  fruits.sort((a, b) => a.name.localeCompare(b.name)); // sort alphabets a to z
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // sort alphabets z to a

  const fruitList = fruits.map((fruit) => (
    <li>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));

  return <ol>{fruitList}</ol>;
}

export default List;
