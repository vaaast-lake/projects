import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText('');
      return;
    } else {
      onAdd({ id: uuidv4(), text, status: 'active' });
      setText('');
    }
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

