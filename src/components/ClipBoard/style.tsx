'use client'
import styled from 'styled-components'

export const ClipBoardContainer = styled.div`


    .clip-board-button {
        background: none;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .default-image { 
        width: 30px;
        height: 30px;
        border-radius: 4px;
        padding: 4px;
    }

    .default-image:active {
        padding: 4px;
        border-radius: 8px;
    }

    .confirm-image {
        width: 30px;
        height: 30px;
        border-radius: 4px;
        padding: 4px;
    }

    .tooltip {
        background-color: #584d4d;
        width: 56px;
        height: 20px;
        border-radius: 4px;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #e7e4e4;
        box-shadow: 1px 1px 0px 0px rgb(4, 1, 4, 0.2);
        font-family: 'Lexend', sans-serif;
    }
`