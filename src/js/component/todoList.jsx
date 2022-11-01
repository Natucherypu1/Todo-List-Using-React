import React, { useState } from "react";



export function TodoList(props) {
  return (
    <div className="todo-list">
    <ul>
      {props.list.map((item, index) =>(<li key={index}>
        {item}
      </li>))}
    </ul>
    </div>
  );
}

