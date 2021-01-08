import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [select, setSelect] = useState("all");

  const onChangeOldu = (e) => {
    setText(e.target.value);
  };

  const handleSubmitOldu = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { id: Math.floor(Math.random() * 10000000), title: text, aktifMi: true },
    ]);

    setText("");
  };

  const aktifMi = (id, aktifMi) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              aktifMi: !aktifMi,
            }
          : todo
      )
    );
  };

  const todoSil = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };

  const completeSil = () => {
	let data = [];
	
    todos.forEach((todo) => {
      todo.aktifMi && data.push(todo);
	});
	
    setTodos(data);
  };

  return (
    <div className="todoapp">
      <Header
        text={text}
        onChangeOldu={onChangeOldu}
        handleSubmitOldu={handleSubmitOldu}
      />
      <TodoList
        todos={todos}
        aktifMi={aktifMi}
        select={select}
        todoSil={todoSil}
      />
      <Footer
        todos={todos}
        select={select}
        setSelect={setSelect}
        completeSil={completeSil}
      />
    </div>
  );
}

export default App;
