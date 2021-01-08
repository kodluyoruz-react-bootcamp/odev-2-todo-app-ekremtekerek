import React, { useState, useEffect } from "react";

function Footer({ todos, select, setSelect, completeSil }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let sayi = 0;
    todos.map((todo) => todo.aktifMi && sayi++);
    setCount(sayi);
  }, [todos]);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{`${count} items left`}</strong>
      </span>

      <ul className="filters">
        <li>
          <button
            className={`${select === "all" && "selected"}`}
            onClick={() => setSelect("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={`${select === "active" && "selected"}`}
            onClick={() => setSelect("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={`${select === "completed" && "selected"}`}
            onClick={() => setSelect("completed")}
          >
            Completed
          </button>
        </li>
      </ul>

      <button 
      className="clear-completed"
      onClick={completeSil}
      >Clear completed</button>
    </footer>
  );
}

export default Footer;
