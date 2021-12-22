import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({id, label, toggleImportant,onDelete,toggleDone, important, done }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
    textDecoration: done ? 'line-through' : 'none',
  };

  return (
    <span className="todo-list-item">
      <span
          onClick={()=> toggleDone(id)}
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={() => toggleImportant(id)}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={() => onDelete(id)}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
