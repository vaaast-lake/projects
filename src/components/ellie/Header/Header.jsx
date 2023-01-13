import React from 'react';
import styles from './Header.module.css'
import {FiSun, FiMoon} from 'react-icons/fi'
import { useDarkMode} from '../../../contexts/ellie/DarkModeContext'

export default function Header({ filters, filter, onFilterChange }) {

  const {darkMode, toggleDarkMode} = useDarkMode();

  return (
    <header className={styles.header}>
      <button
        className={styles.toggle}
        onClick={toggleDarkMode}
      >
        {!darkMode && <FiMoon />} 
        {darkMode && <FiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => 
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={`${styles.filter} ${filter === value && styles.selected}`}
            >
              {value}
            </button>
          </li>
        )}
      </ul>
    </header>
  );
}