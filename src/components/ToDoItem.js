import React from "react";

function ToDoItem({ inputText, handleChange, handleClick }) {
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default ToDoItem;
