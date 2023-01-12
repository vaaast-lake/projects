import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function Todo({ todo, onUpdate, onDelete  }) {

  const { text, status, id } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  }
  const handleDelete = () => onDelete(todo);

  return (
    <li key={id}>
      <input
        type="checkbox" 
        id='checkbox'                      
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>{text}</label>
      <button onClick={handleDelete}>
        <FiTrash2 />
      </button>
    </li>
  );
}

