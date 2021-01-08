import React, { useState, useEffect } from "react";

function TodoList({ todos, aktifMi, select, todoSil }) {
  const [todoList, setTodoList] = useState(todos);

  useEffect(() => {
    let arr = [];

    if (select === "all") {
      arr.push(...todos);
    } else if (select === "active") {
      todos.forEach((todo) => {
        todo.aktifMi && arr.push(todo);
      });
    } else if (select === "completed") {
      todos.forEach((todo) => {
        !todo.aktifMi && arr.push(todo);
      });
    }
    setTodoList(arr);
  }, [todos, select]);

  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todoList.map((todo, i) => (
          <li key={i} className={`${todo.aktifMi === false && "completed"}`}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => aktifMi(todo.id, todo.aktifMi)}
              />
              <label>{todo.title}</label>
              <button
                className="destroy"
                onClick={() => todoSil(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
