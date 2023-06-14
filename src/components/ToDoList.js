import React from "react";

function TodoList({ items, handleDelete }) {
  return (
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
  );
}

export default TodoList;
