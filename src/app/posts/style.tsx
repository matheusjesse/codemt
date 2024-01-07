'use client'

import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    color: #2c2625;

    .content-body {
        padding-top: 134px;
        width: 70%;
        border: 1px solid #a5a0a0;
        border-radius: 4px;
        margin-top: 124px;
        margin-bottom: 124px;
        padding: 12px;
        box-shadow: 0px 0px 1px 0px rgba(100, 105, 110, 0.1);
    }

    img {
        max-height: 340px;
        max-width: 100%;
    }

    pre {
        background-color: #f5f1f1;
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        overflow-x: auto;        
        margin-bottom: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    pre code {
        color: #333;
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
        border-color: #ffffff;
    }

    p {
        margin: 4px 0 12px 0;
        font-family: 'Lexend', sans-serif;
    }

    blockquote {
        border-left: 3px solid #444242;
        padding-left: 8px;
        color: #8b8686;
        margin: 18px 0 18px 0;
    }
`;