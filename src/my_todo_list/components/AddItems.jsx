import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import styles from '../styles/AddItems.module.css'
import Button from './Button';

export default function AddItems({ addItem }) {
  const [form, setForm] = useState({ name: '' });
  const { darkMode } = useContext(DarkModeContext);

  const randomKeyMaker = () => {
    return Math.floor(Math.random() * 10000);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ [name]: value });
  }

  const handleSubmit = (e) => {
    const name = e.target[0].name;
    const value = e.target[0].value;
    const key = randomKeyMaker().toString();
    e.preventDefault();
    addItem({ [name]: value, key, checked: false });
    setForm({ name: '' });
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input 
        type="text"
        className={styles.input}
        placeholder='Add Todo'
        name='name'
        value={form.name}
        onChange={handleChange}
      />
      <Button 
        styleName='add'
        darkModeStyle={{ backgroundColor: darkMode || '#7d8bae' }}
      >
        Add
      </Button>
    </form>
  );
}

