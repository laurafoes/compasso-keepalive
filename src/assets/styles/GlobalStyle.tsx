import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';
import { corPrincipal } from "./variables";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
    box-sizing: border-box;
    font-family: 'Mark Pro', sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: ${corPrincipal};
    
    h1 {
        font-size: 60px;
    }
    h2 {
        font-size: 64px;
        font-weight: 700;
    }
    h3 {
        font-size: 36px;
        font-weight: 700;
    }
    h4 {
        font-size: 30px; 
    }
    h5 {
        font-size: 48px;
    }
    }
`