'use client'

import styled from "styled-components";
import { mainFont } from "@/styles/globals";

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
        border-left: 1px solid ${({ theme }) => theme.codeLine};
        border-right: 1px solid ${({ theme }) => theme.codeLine};
        border-bottom: 1px solid ${({ theme }) => theme.codeLine};
        border-radius: 0 0 5px 5px;
        overflow-x: auto;        
        margin-bottom: 24px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 100%;
    }

    pre code {
        color: ${({ theme }) => theme.text};
        font-family: 'Courier New', Courier, monospace;
        font-size: 14px;
        line-height: 1.5;
        max-width: 90%;
    }

    h1 {
        margin-bottom: 34px;
        font-family: ${mainFont.lexend};
    }

    h2 {
        margin-bottom: 12px;
        
        margin-top: 28px;
        font-family: ${mainFont.lexend};
    }

    h4 {
        margin-bottom: 14px;
        font-family: ${mainFont.lexend};
        
    }

    hr {
        margin-bottom: 18px;
        border-color: ${({ theme }) => theme.lineColor};        
    }

    p {
        margin: 4px 0 12px 0;
        font-family: ${mainFont.lexend};
    }

    blockquote {
        border-left: 3px solid #444242;
        padding-left: 8px;
        color: #aca9a9;
        margin: 18px 0 18px 0;
    }

    a {
        color: #494bda;
        cursor: pointer;
        text-decoration: underline;
    }

    
`;