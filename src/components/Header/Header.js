import React from "react";

function Header({ text, onChangeOldu, handleSubmitOldu }) {
  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmitOldu}>
        <input
          onChange={onChangeOldu}
          className="new-todo"
          placeholder="What needs to be done"
          value={text}
          autoFocus
        />
      </form>
    </div>
  );
}

export default Header;
