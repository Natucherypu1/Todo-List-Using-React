import React, { useState } from "react";



export function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleKeyPress = (e)=>{
    if (e.key === "Enter" && input!=="") {
        
      props.setList(props.list.concat(input))
      setInput("")
     } }
  return (
    <div className="todo-form">
      <h1> Todo List</h1>
      <input 
        type="text"
        value={input}
        name="text"
        className="todo-input"
        onChange={(e)=> setInput(e.target.value)}
        onKeyPress={(e)=> handleKeyPress(e)}
      />
    </div>
  );
}

