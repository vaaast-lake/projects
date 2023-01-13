import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css'
import {DarkModeContext} from '../../../contexts/ellie/DarkModeProvider'

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const {darkMode} = useContext(DarkModeContext);

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
    <form 
      className={`${styles.form} ${darkMode === 'dark' && styles.dark}`} 
      onSubmit={handleSubmit}
    >
      <input 
        className={styles.input}
        type="text"
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <button
        className={styles.button}
      >
        Add
      </button>
    </form>
  );
}

