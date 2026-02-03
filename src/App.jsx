import "./App.css";
import List from "./List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "banana", calories: 100 },
    { id: 2, name: "apple", calories: 220 },
    { id: 3, name: "orange", calories: 332 },
    { id: 4, name: "kiwi", calories: 60 },
    { id: 5, name: "pine apple", calories: 42 },
  ];
  return (
    <>
      <List category="Fruits" items={fruits} />
    </>
  );
}

export default App;
