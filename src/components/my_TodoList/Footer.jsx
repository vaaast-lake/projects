import React, { useContext } from 'react';
import AddItems from './AddItems';
import styles from '../styles/Footer.module.css';
import { DarkModeContext } from '../contexts/DarkModeContext';

export default function Footer({ addItem }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <footer 
      className={styles.footer}
      style={{ backgroundColor: darkMode || '#f1b2b2' }}
    >
      <AddItems addItem={addItem} />
    </footer>
  );
}

