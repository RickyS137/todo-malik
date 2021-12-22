import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, toggleImportant,onDelete,toggleDone }) => {

  const elements = todos.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem
            toggleImportant={toggleImportant}
            toggleDone={toggleDone}
            onDelete={onDelete}
            {...item}
        />

      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
