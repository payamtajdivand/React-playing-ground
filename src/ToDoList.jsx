import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTask] = useState([
    "wake up at 11",
    "break fast",
    "start reading",
  ]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function removeTask() {}
  function moveTaskUp() {}
  function moveTaskDown() {}
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  return (
    <div className="to-do-list">
      <h2>To-Do-List</h2>
      <input
        type="text"
        placeholder="Enter a Task..."
        onChange={handleInputChange}
        value={newTask}
      />
      <button className="add-button" onClick={addTask}>
        {" "}
        Add
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => removeTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
