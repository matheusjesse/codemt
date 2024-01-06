'use client'

import styled from 'styled-components';

export const ContainerPage = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: #faf3e0;
    padding-top: 134px;
    
    .highlight {
            background-color: #0EB88B; /* Cor de destaque, você pode ajustar conforme necessário */
            font-weight: bold; /* Estilo de fonte, você pode ajustar conforme necessário */
    }
    h1 {
        width: 100%;
        text-align: center;
        font-family: 'Lexend', sans-serif;
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
      font-family: 'Lexend', sans-serif;
      font-size: 1.5em;
      line-height: 1.5;
   }
`;