'use client'
import styled from "styled-components";

export const HeaderContainer = styled.header`
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            top: 0;
            z-index: 1000;
            height: 64px;
            padding: 0 28px 0 28px;           
            

            .logo-title {
                font-size: 1em;
                text-align: center;
                margin: 0px;
            }

            ul, ol {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            a {
                text-decoration: none; /* Remove a sublinhado dos links na navegação */
                color: black;
                              
            }
        
            li {
                               
                width: 60px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Lexend', sans-serif;
                font-size: 0.9em;
                border-radius: 6px; 
                border: 2px solid #0EB88B; 
                font-weight: 500;    
                transition: background-color 0.4s ease-out;    
            }

            li:hover {
                //box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.2);
                background-color: #0EB88B; ;
            }
            
            
`;