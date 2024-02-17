'use client'

import styled from 'styled-components';
import { mainFont } from './globals';

export const ContainerPage = styled.main`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.bgColor};
    padding-top: 134px;
    align-content: center;
    .highlight {
            background-color: ${({ theme }) => theme.highLight};
            font-weight: bold; 
    }

    main {
        background: ${({ theme }) => theme.bgColor};
    }
    h1 {
        width: 100%;
        text-align: center;
        font-family: ${mainFont.lexend};
        font-size: 2.5em;
        margin-bottom: 20px;
    }

    hr {
        width: 100%;
        visibility: hidden;
    }

    p {
      text-indent: 20px; /* Adiciona um recuo no início de cada parágrafo */
      max-width: 890px;
      margin: 0 18px 0 18px;      
      font-family: ${mainFont.lexend};
      font-size: 1.5em;
      line-height: 1.5;
   }

   .card-section {
    max-width: 624px;
    padding-top: 84px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 84px;
    @media screen and (max-width: 690px) {            
        max-width: 412px;
    }
    @media screen and (max-width: 440px) {            
        max-width: 200px;
    }    

    }

   
`;