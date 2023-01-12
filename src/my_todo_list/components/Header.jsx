import React, { useContext } from 'react';
import styles from '../styles/Header.module.css';
import { FiSun, FiMoon } from "react-icons/fi";
import Button from './Button'
import { DarkModeContext } from '../contexts/DarkModeContext';

export default function Header({ filterItem }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header 
      className={styles.header}
      style={{
        backgroundColor: darkMode || '#f1b2b2',
        borderBottom: darkMode || '2px solid white',
      }}
    >
      <Button
        styleName='theme'
        onClick={toggleDarkMode}
      >
        {darkMode ? <FiSun /> : <FiMoon stroke='#45496a' />}
      </Button>
      <div className={styles.wrapper}>
        <Button 
          styleName='dataSet' 
          darkModeStyle={{ color: darkMode || '#45496a' }}
          onClick={filterItem}
          name={'all'}
        >
          All
        </Button>
        <Button 
          styleName='dataSet' 
          darkModeStyle={{ color: darkMode || '#45496a' }}
          onClick={filterItem}
          name={'active'}
        >
          Active
        </Button>
        <Button 
          styleName='dataSet' 
          darkModeStyle={{ color: darkMode || '#45496a' }}
          onClick={filterItem}
          name={'completed'}
        >
          Completed
        </Button>
      </div>
    </header>
  );
}

