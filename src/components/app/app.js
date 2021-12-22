import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import todoAdd from "../todo-add";

import './app.css';
import TodoAdd from "../todo-add";

class App extends React.Component {
  todo_ids = 100;
  state = {
    todos: [
      { id: 1, label: 'Drink Coffee', important: false, done: false },
      { id: 2, label: 'Make Awesome App', important: false, done: true },
      { id: 3, label: 'Have a lunch', important: false, done: false },
      { id: 4, label: 'Do the homework', important: true, done: true }
    ],
    status:'all',
    search: '',
  }

  toggleImportant = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id == id)
      const element_old = oldState.todos[idx]
      const element_new = {...element_old, important: !element_old.important}

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const new_todos = [...prev, element_new, ...next]

      return {todos: new_todos}
    })
  }
  onDelete = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id == id)

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const new_todos = [...prev, ...next]

      return {todos: new_todos}
    })
  }

  toggleDone = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id == id)
      const element_old = oldState.todos[idx]
      const element_new = {...element_old, done: !element_old.done}

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const new_todos = [...prev, element_new, ...next]

      return {todos: new_todos}
    })
  }

  switchStatus = (statusText) => {
    this.setState({
      status: statusText
    })
  }
  onSearch = (searchText) => {
    this.setState({
      search: searchText
    })
  }

  filterByStatus = (todos) => {
    if (this.state.status == 'active'){
      return todos.filter((item) => item.done == false)
    }else if (this.state.status == 'done'){
      return todos.filter((item) => item.done == true)
    }else if (this.state.status == 'important'){
      return todos.filter((item) => item.important == true)
    }else {
      return todos
    }
  }

  filterBySearchString = (todos) =>{
    return todos.filter((item) => item.label.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  onAdd = (todoText) => {
    const newTodo = {
      id: this.todo_ids++,
      label: todoText,
      important: false,
      done: false
    }
    this.setState((oldState) => {
      return{
        todos: [...oldState.todos, newTodo]
      }
    })
  }

  render() {
    const filteredByStatusFilter = this.filterByStatus(this.state.todos)
    const filteredBySearchFilter = this.filterBySearchString(filteredByStatusFilter)

    const doneTodos = (this.state.todos.filter(item => item.done)).length
    const alltodos = (this.state.todos.filter(item => item.id)).length

    return (
      <div className="todo-app">
        <AppHeader toDo={alltodos} done={doneTodos} />

        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter status={this.state.status} switchStatus={this.switchStatus} />
        </div>

        <TodoList
            toggleDone={this.toggleDone}
            toggleImportant={this.toggleImportant}
            todos={filteredBySearchFilter}
            onDelete={this.onDelete}
        />
        <TodoAdd onAdd={this.onAdd} />
      </div>
    );
  }
};

export default App;
