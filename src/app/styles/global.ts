'use client'
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`         
    * {
        font-family: 'Oxygen';  
        font-weight: 300;
        scrollbar-width: thin;
        scrollbar-color: #e0e0e0 transparent;     
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    /* Chrome, Edge, Safari */
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: transparent;
        transition: background 0.3s;
        //background-color: #e0e0e0;
        //border-radius: 5px;
    }

    body:hover::-webkit-scrollbar-thumb,
    body:active::-webkit-scrollbar-thumb {
      background: red;
    }
    
    
    body {
      font-size: 16px;
      box-sizing: border-box;
      background-color: ${(props) => props.theme.colors.background};
    }

    body, #root {
      height: 100vh;
      width: 100vw;
      overflow-x: hidden;
    }

    * h1 {
      font-size: 2.375rem;
      color: ${(props) => props.theme.colors.headline1}
    }

    * h2 {
      font-size: 2rem;
      letter-spacing: 0.2%;
      color: ${(props) => props.theme.colors.headline1}
    }

    * h3 {
      font-size: 24px;
      font-weight: 400;
      line-height: 30px;
      color: ${(props) => props.theme.colors.headline1}

    }

    * h4 {
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0.2%;
      color: ${(props) => props.theme.colors.headline1}
    }

    .MuiModal-root {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
