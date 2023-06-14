import React, { useState } from "react";
import './App.css';

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

      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <button onClick={() => handleDelete(index)}>
                <span>&#x2713;</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
