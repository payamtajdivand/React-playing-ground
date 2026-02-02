import "./App.css";
import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Kolah Ghermezi" age={15} isStudent={true} />
      <Student name="Peasr Khale" age={17} isStudent={false} />
      <Student name="Gabi" age={30} isStudent={false} />
      <Student name="Pesar Ama za" age={13} isStudent={true} />
      <Student name="Agha -e- hamsaye " age={52} isStudent={false} />
    </>
  );
}

export default App;
