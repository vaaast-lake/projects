import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function Todo({ todos, deleteTodo }) {

  return (
    <ul>
      {
        todos.map(item => (
          <li key={item.id}>
            {item.text}
            <button
              id={item.id} 
              onClick={deleteTodo}>
              <FiTrash2 />
            </button>
          </li>
        ))
      }
    </ul>
  );
}

