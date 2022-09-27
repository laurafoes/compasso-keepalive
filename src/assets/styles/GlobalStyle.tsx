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
    @media   (max-width: 480px) {
       font-size: 14px;
    }
    
    h1 {
        font-size: 60px;
        @media   (max-width: 480px) {
            font-size: 46px;
        }
    }
    /* h2 {
        font-size: 64px;
        font-weight: 700;
        transition: ease 1000s;
    }
    h3 {
        font-size: 36px;
        font-weight: 700;
        line-height: 4.25vh;
    } */
    h4 {
        font-size: 30px; 
        @media   (max-width: 480px) {
            font-size: 26px;
        }
    }
    h5 {
        font-size: 48px;
        @media   (max-width: 1024px) {
            font-size: 4vh;
            }
        }
    }
`