import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import styles from './Todo.module.css'

export default function Todo({ todo, onUpdate, onDelete  }) {

  const { text, status, id } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  }
  const handleDelete = () => onDelete(todo);

  return (
    <li key={id} className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox" 
        id={id}                      
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text} >{text}</label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FiTrash2 />
        </button>
      </span>
    </li>
  );
}

