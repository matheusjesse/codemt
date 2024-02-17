'use client'
import styled from 'styled-components';

export const BannerContainer = styled.div`
    width: 100vw;
    height: 440px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
    //background: linear-gradient(to right, #faf3e0, #f0e4c0);
    background: linear-gradient(130deg, #29DFAF 0%, #7D4CBB 32.5%, #1FA383 100%);

    .banner-title{
        width: 800px;
        text-align: start;
        margin: 0 20% 0 20%;
        margin-top: 124px;
        font-family: 'Lexend', sans-serif;
        font-size: 3.7em;
        color: #faf3e0;
        
        
        
        @media screen and (max-width: 1314px) {        
            font-size: 3em;       
        }
        @media screen and (max-width: 845px) {
            margin: 124px 4% 0 10% ;
            font-size: 2em;
        }
       
    }

    .banner-sub-title {
        margin: 0;
        width: 800px;
        text-align: start;
        font-size: 1em;
        margin: 24px 20% 0 20%;;
        font-family: 'Lexend', sans-serif;
        color: #faf3e0;
        @media screen and (max-width: 845px) {
            margin: 24px 4% 0 10% ;
        }
    }
`