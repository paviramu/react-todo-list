import React, { useState } from "react";

import "./App.css";

function App() {
  const [showAddButton, setShowAddButton] = useState(true);
  const [newValue, setNewValue] = useState("");
  const [task, setTask] = useState([]);
  const [updatedTask, setUpdatedTask] = useState([]);

  const onChangeText = (event) => {
    setNewValue(event.target.value);
  };

  const addTask = () => {
    const id = task.length + 1;
    let newEntry = { id: id, taskName: newValue, status: "N" };
    setTask([...task, newEntry]);
    setNewValue("");
  };

  const updateTask = () => {
    updatedTask[0].taskName = newValue;
    setNewValue("");
    setShowAddButton(true);
  };

  const handleEdit = (id) => {
    let filteredTask = [...task].filter((taskList) => taskList.id === id);
    setNewValue(filteredTask[0].taskName);
    setUpdatedTask(filteredTask);
    setShowAddButton(false);
  };
  const deleteTask = (id) => {
    let updatedTodos = [...task].filter((taskList) => taskList.id !== id);
    setTask(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>TODO List.</p>
        <input type="text" onChange={onChangeText} value={newValue} />

        <div>
          {showAddButton ? (
            <button onClick={addTask}>Add Task</button>
          ) : (
            <button onClick={updateTask}>Update Task</button>
          )}
        </div>

        <div className="row ">
          {task.map((element, index) => {
            return (
              <div>
                <span>{element.id}</span>
                <span>{element.taskName}</span>
                <input
                  type="button"
                  value="Edit"
                  onClick={() => {
                    handleEdit(element.id);
                  }}
                ></input>
                <input
                  type="button"
                  value="delete"
                  onClick={() => {
                    deleteTask(element.id);
                  }}
                ></input>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
