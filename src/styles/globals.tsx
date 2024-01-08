'use client'
import { createGlobalStyle } from 'styled-components';

import { Lexend } from 'next/font/google';

const lexend = Lexend({  
  subsets: ['latin']
})

export const mainFont = {
  lexend: lexend.style.fontFamily
}

export const lightTheme = {
  bgColor: '#FAF3E0',
  text: '#0E1311',
  highLight: '#0EB88B',
  bgTutorial: '#fff',
  fgTutorial: '#fff',
  bgCode: '#f7f5f4',
  lineColor: 'rgba(255, 255, 255, 0.4)',
  shadowColor: 'rgba(107, 101, 110, 0.6)',
  codeLine: '#ccc',
};

export const darkTheme = {
  bgColor: '#3b3838',
  text: '#f8f6f0',
  highLight: '#5327B1',
  bgTutorial: '#0f0e0e',
  fgTutorial: '#1b1919',
  bgCode: '#333135',
  lineColor: 'rgba(22, 21, 21, 0.6)',
  shadowColor: 'rgba(0, 0, 0, 0.8)',
  codeLine: '#686666',
};

const GlobalStyles = createGlobalStyle`
:root {
    --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', 'Lexend', monospace;
}


.toggle-button {
  background: none;
  border: none;
  position: fixed ;
  right: 0;
  width: 40px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  top: 17px;
  right: 20px;
  z-index: 10001;
  
}

.light-text {
  background-color: #0EB88B;
  width: 40px;
  height: 28px;
  font-family: ${mainFont.lexend};
  border-radius: 4px;
  padding-top: 5px;
  font-weight: 500;
  box-shadow: 0px 0px 3px rgb(1,1,1, 0.1);
}

.dark-text {
  background-color: #a06ce4;
  width: 40px;
  height: 28px;
  font-family: ${mainFont.lexend};
  border-radius: 4px;
  padding-top: 5px;
  font-weight: 500;
  box-shadow: 0px 0px 3px rgb(1,1,1, 0.1);
  color: white;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s, color 0.3s;
}
`;

export default GlobalStyles;