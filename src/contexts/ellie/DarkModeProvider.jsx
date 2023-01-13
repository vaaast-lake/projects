import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState('dark');

  const toggleDarkMode = () => {
    setDarkMode(prev => prev === 'dark' ? 'ligth' : 'dark');
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

