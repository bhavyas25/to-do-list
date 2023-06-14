import React, { useState } from "react";
import './App.css';
import ToDoItem from "./components/ToDoItem";
import TodoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleClick() {
    setItems([...items, inputText]);
    setInputText("");
  }

  function handleChange(event) {
    const newVal = event.target.value;
    setInputText(newVal);
  }

  function handleDelete(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <ToDoItem
        inputText={inputText}
        handleChange={handleChange}
        handleClick={handleClick}
      />

      <TodoList items={items} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
