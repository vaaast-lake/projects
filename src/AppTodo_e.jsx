import React, { useState } from 'react';
import Header from './components/ellie/Header/Header';
import TodoList from './components/ellie/TodoList/TodoList';

const filters = ['all', 'active', 'completed']

export default function AppTodo_e() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div>
      <Header 
        filters={filters} 
        filter={filter} 
        onFilterChange={setFilter} 
      />
      <TodoList filter={filter} />
    </div>
  );
}