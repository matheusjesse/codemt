'use client'
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme, darkTheme}  from '@/styles/globals';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeProvider>
  );
};

export default ThemeToggle;
