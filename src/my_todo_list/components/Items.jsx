import React, { useContext } from 'react';
import styles from '../styles/Items.module.css'
import { FiTrash2 } from "react-icons/fi";
import Button from './Button';
import { DarkModeContext } from '../contexts/DarkModeContext';

export default function Items({ mainItems, deleteItem, checkItem }) {
  const { darkMode } = useContext(DarkModeContext);
  

  return (
    <ul 
      className={styles.items}
      style={{ backgroundColor: darkMode || '#e8ccc7' }}  
    >
      {
        mainItems.length > 0 && 
        mainItems.map((item) => (
          <li 
            className={styles.item}
            key={item.key}
          >
            <div className={styles.wrapper}>
              <input 
                type="checkbox"
                className={styles.checkbox}
                id={item.key}
                checked={item.checked}
                onChange={checkItem}
                style={{ accentColor: darkMode || '#7d8bae' }}
              />
              <span 
                className={styles.name}
                style={{ 
                  textDecoration: item.checked && 'line-through',
                  color: item.checked &&  '#afaea4',
                }}
              >
                {item.name}
              </span>
            </div>
            <Button
              contents={darkMode ? <FiTrash2 /> : <FiTrash2 stroke='#45496a' /> } styleName='delete'
              onClick={deleteItem}
              id={item.key}
            >
              {darkMode ? <FiTrash2 /> : <FiTrash2 stroke='#45496a' />} 
            </Button>
          </li>
        ))
      }
    </ul>
  );
}

