/* Create a functional component called ToDoList.
Use the useState hook to manage a state variable named todos, initialized as an empty array.
Render a list of todos using the map function.
Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
Use the useState hook to manage the state of each todo item (completed or not). */
"use client";

import { useEffect, useState } from "react";

const ToDoList = () => {
  const [todos, setToDos] = useState([]);
  const [newitem, setNewItem] = useState("");

  const addTodo = () => {
    let newItem = newitem.trim();
    const newTodo = {
      title: newItem,
      status: "unchecked",
    };
    setToDos([...todos, newTodo]);
    setNewItem("");
  };

  const deleteTodo = (index) => {
    setToDos(todos.filter((_, i) => i !== index));
  };

const checked = (i) => {
  const updatedTodos = todos.map((todo, index) =>
    index === i
      ? { ...todo, status: todo.status === "checked" ? "unchecked" : "checked" }
      : todo
  );
  setToDos(updatedTodos);
};



  useEffect(() => {
    console.log(todos);
  });

  return (
    <div>
      <h1>ToDo Items</h1>

      <input
        type="text"
        placeholder="enter new todo"
        value={newitem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={(e) => {
                checked(index);
              }}
            />
            {index + 1}{". "}{todo.title}{" "}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;