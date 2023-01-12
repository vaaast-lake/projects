import React, { useState } from 'react';
import Button from './Button';

export default function AddItem({ addTodos }) {
  const [text, setText] = useState('');

  const randomId = () => {
    return Math.floor(Math.random() * 1000).toString();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value.trim();
    const id = randomId();
    if (value === '') {
      setText('');
      return;
    } else {
      addTodos(id, value, 'active');
      setText('');
    }
  }

  const handleText = (e) => {
    setText(e.target.value)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='Add Todo'
        value={text}
        onChange={handleText}
      />
      <Button>Add</Button>
    </form>
  );
}

