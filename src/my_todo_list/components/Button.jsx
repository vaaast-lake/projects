import React from 'react';
import styles from '../styles/Button.module.css';

export default function Button({ children, styleName, onClick, id, darkModeStyle, name }) {
  return (
    <button 
      className={ styles[styleName] }
      onClick={onClick}
      id={id}
      style={darkModeStyle}
      name={name}
    >
      { children }
    </button>
  );
}