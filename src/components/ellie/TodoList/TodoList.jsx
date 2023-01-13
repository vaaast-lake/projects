import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => {
    setTodos(prev => [...prev, todo]);
    localStorage.setItem(todo.id, JSON.stringify(todo));
  }
  
  const handleUpdate = (updated) => {
    setTodos(todos.map(t => t.id === updated.id ? updated : t));
    localStorage.setItem(updated.id, JSON.stringify(updated));
  }
  
  const handleDelete = (deleted) => {
    setTodos(todos.filter(t => t.id !== deleted.id));
    localStorage.removeItem(deleted.id);
  }

  // function readTodosFromLocalStorage(todos) {
  //   const items = [];
  //   if(todos !== []) {
  //     const ids = todos.map((todo) => todo.id);
  //     ids.forEach((el) => {
  //       items.push(localStorage[el]);
  //       console.log(el);
  //     });
  //     return items;
  //   } else {
  //     return [];
  //   }
  // }

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {
          filtered.map(item => (
            <Todo
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}  
            />
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter(todo => todo.status === filter);
}