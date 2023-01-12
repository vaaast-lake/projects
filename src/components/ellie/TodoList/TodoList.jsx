import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ])

  const handleAdd = (todo) => {
    setTodos(prev => [...prev, todo]);
  }

  const handleDelete = (e) => {
    const id = e.currentTarget.id;
    setTodos(prev => prev.filter(item => item.id !== id));
  }
 
  return (
    <section>
      <Todo todos={todos} deleteTodo={handleDelete} />
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

