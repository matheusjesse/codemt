'use client'

import styled from "styled-components"
import { mainFont } from '@/styles/globals';

export const CardContainer = styled.div`
    width: 200px;
    height: 280px;
    background: linear-gradient(120deg, #29DFAF 4%, #7D4CBB 38.5%, #1FA383 100%);
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 1px 1px 8px 0px ${({ theme }) => theme.shadowColor};
    flex-wrap: wrap;
    .innercard {
        background-color: rgba(201, 180, 180, 0.4); /* Cor de fundo com transparência */
        backdrop-filter: blur(10px); /* Desfoque aplicado ao plano de fundo */
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        align-content: flex-start;
        margin-top: 28px;
        transition: margin-top 0.5s ease-in;  
        max-width: 200px;        
        height:180px;
        box-shadow: 0px -1px 4px -2px rgba(139, 12, 139, 0.8);
        
    }
    .innercard:hover {
        margin-top: 0px;
        transition: margin-top 0.3s ease-out;  
    }

    .innercard p {
        font-size: 0.8em;
        height: 98px;
        margin: 0;
        max-width: 200px;
        padding: 0 4px 4px 4px;
        margin-top: 18px;
        color: #f8f5f4;
    }

    .card-text {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        overflow: hidden;
        -webkit-box-orient: vertical; 
    }

    .title-card {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title-card h1 {
        margin: 0;
        color: #f8f5f4;
        font-size: 1.8em;
    }

    .tags-container {
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 8px 0 8px;
        justify-content: space-around;
        flex-wrap: wrap;
        padding-top: 14px;
        gap: 4px;
    }

    .tags {
        border: 2px solid #f8f5f4;
        border-radius: 4px;
        font-family: ${mainFont.lexend};
        min-width: 34px;
        height: 18px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 4px 0 4px;
        color: #f8f5f4;
        
    }

    .link-guide {
        color: #f8f5f4;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 12px;
        font-family: ${mainFont.lexend};
        cursor: pointer;
    }

    a {
        text-decoration: none; /* Remove a sublinhado dos links na navegação */
        color: #f8f5f4;;                              
    }
`