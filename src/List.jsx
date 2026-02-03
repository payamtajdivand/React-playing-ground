function List(props) {
  //fruits.sort((a, b) => a.calories - b.calories); //sort numeric lower to higher
  //fruits.sort((a, b) => b.calories - a.calories); //sort numeric higher to lower
  //fruits.sort((a, b) => a.name.localeCompare(b.name)); // sort alphabets a to z
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // sort alphabets z to a

  //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100); //low cal fruits
  // const highCalFruits = fruits.filter(
  //   (highCalFruit) => highCalFruit.calories >= 100,
  // ); high cal fruits
  const category = props.category;
  const items = props.items;
  items.sort((a, b) => b.calories - a.calories);
  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      {" "}
      <h3 className="category-list">{category}</h3>
      <ol className="items-list">{listItems}</ol>
    </>
  );
}

export default List;
