import React, { useState } from "react";

export function TodoList(props) {
  const deleteTodo = (index) => {
    props.setList(props.list.filter((item, i) => index != i));
  };

  return (
    <div className="todo-list p-0">
      <ul className="p-0">
        {props.list.map((item, index) => (
          <li
            className="navbar mx-auto px-2"
            onMouseEnter={() =>
              document.getElementById("ico" + index).classList.add("visible")
            }
            onMouseLeave={() =>
              document.getElementById("ico" + index).classList.remove("visible")
            }
            key={index}
          >
            {item}
            <i
              id={"ico" + index}
              class="fa-regular fa-trash-can"
              onClick={() => deleteTodo(index)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}
