import React, { useState } from "react";



export function TodoForm(props) {
  const [input, setInput] = useState("");
  
  return (
    <div className="todo-form">
      <h1> Todo List</h1>
      <input
        type="text"
        placeholder="What Needs To Be Done "
        value={input}
        name="text"
        className="todo-input"
      />
    </div>
  );
}

