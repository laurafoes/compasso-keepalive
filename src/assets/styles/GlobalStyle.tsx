import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    }
`