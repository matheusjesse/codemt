'use client'

import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    color: #${({ theme }) => theme.text};
    background: ${({ theme }) => theme.bgTutorial};
    flex-wrap: wrap;
    
    .content-body {
        padding-top: 134px;
        width: 800px;
        border-radius: 8px;
        margin-top: -64px;
        margin-bottom: 124px;
        padding: 44px 12px 12px 12px;
        box-shadow: 0px -1px 8px 0px ${({ theme }) => theme.shadowColor};
        background-color: ${({ theme }) => theme.fgTutorial};
        @media screen and (max-width: 800px) {
        width: 94%;
        }
    }

    img {
        max-height: 340px;
        max-width: 100%;
    }

    pre {
        background-color: ${({ theme }) => theme.bgCode};
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        overflow-x: auto;        
        margin-bottom: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 614px;
    }

    pre code {
        color: ${({ theme }) => theme.text};
        font-family: 'Courier New', Courier, monospace;
        font-size: 14px;
        line-height: 1.5;
    }

    h1 {
        margin-bottom: 34px;
        font-family: 'Lexend', sans-serif;
    }

    h2 {
        margin-bottom: 12px;
        
        margin-top: 28px;
        font-family: 'Lexend', sans-serif;
    }

    h4 {
        margin-bottom: 14px;
        font-family: 'Lexend', sans-serif;
        
    }

    hr {
        margin-bottom: 18px;
        border-color: ${({ theme }) => theme.lineColor};
        
    }

    p {
        margin: 4px 0 12px 0;
        font-family: 'Lexend', sans-serif;
    }

    blockquote {
        border-left: 3px solid #444242;
        padding-left: 8px;
        color: #aca9a9;
        margin: 18px 0 18px 0;
    }

    
`;