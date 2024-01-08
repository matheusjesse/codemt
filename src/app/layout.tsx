'use client'
import StyledComponentsRegistry from './registry'
import GlobalStyles, { lightTheme, darkTheme} from '../styles/globals';
import { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <html lang="pt-br">
      <head>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"></meta>        
        <title>Code MT</title>
      </head>
      
      <body>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <button className='toggle-button' onClick={toggleTheme}>
            {
              theme === 'light' ? <div className='light-text'>Light</div> : <div className='dark-text'>Dark</div>
            }
          </button>
          {children}
        </StyledComponentsRegistry>
      </ThemeProvider>
      </body>
    </html>
  )
}
