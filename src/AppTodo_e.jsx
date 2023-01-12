import React, { useState, useEffect } from 'react';
import styles from './with_ellie/styles/AppTodo_e.module.css';

export default function AppTodo_e() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('data/items.json')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <ul>
      {
        items.map(item => (
          <li key={item.key} >
            {item.name}
          </li>
        ))
      }
    </ul>
  );
}