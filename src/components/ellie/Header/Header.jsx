import React, { useContext } from 'react';
import styles from './Header.module.css'
import {FiSun, FiMoon} from 'react-icons/fi'
import {DarkModeContext} from '../../../contexts/ellie/DarkModeProvider'

export default function Header({ filters, filter, onFilterChange }) {

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  return (
    <header className={`${styles.header} ${darkMode === 'dark' && styles.dark}`}>
      <button
        className={styles.button}
        onClick={toggleDarkMode}
      >
        {darkMode === 'dark' ? <FiSun className={`${styles.icon} ${styles.dark}`}/> : <FiMoon className={`${styles.icon}`}/>}
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