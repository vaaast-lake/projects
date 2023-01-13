import React, { useState } from 'react';
import Header from './components/ellie/Header/Header';
import TodoList from './components/ellie/TodoList/TodoList';
import {DarkModeProvider} from './contexts/ellie/DarkModeProvider';

const filters = ['all', 'active', 'completed']

export default function AppTodo_e() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <DarkModeProvider>
        <Header 
          filters={filters} 
          filter={filter} 
          onFilterChange={setFilter} 
        />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </>
  );
}