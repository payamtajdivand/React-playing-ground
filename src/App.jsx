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

  const vegtabales = [
    { id: 6, name: "potato", calories: 25 },
    { id: 7, name: "carrot", calories: 36 },
    { id: 8, name: "corn", calories: 15 },
    { id: 9, name: "broccoli", calories: 7 },
    { id: 10, name: "celery", calories: 12 },
  ];
  return (
    <>
      <List category="Fruits" items={fruits} />
      <List category="Vegtabales" items={vegtabales} />
    </>
  );
}

export default App;
