import styled from "styled-components";
import { corSecundaria } from "../../assets/styles/variables";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`

export const Hora = styled.h1`
    margin: 0px;
    font-size: 144px;
    line-height: 120px;
    font-weight: 700;
    color: ${corSecundaria};
    @media screen and (max-width: 768px) {
       font-size: 86px;
       line-height: 80px;
    }
    
`

export const Data = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${corSecundaria};
    @media screen and (max-width: 768px) {
        margin-bottom: 1.5rem;
    }
`