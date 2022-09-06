import React from "react";

export default function Todo(props) {
  return (
    <>
      <div className="todo-container todo">
        <input type="checkbox" />
        <p>{props.name}</p>
      </div>
    </>
  );
}
