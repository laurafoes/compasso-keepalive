import styled from "styled-components";
import { corSecundaria } from "../../assets/styles/variables";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
`

export const Hora = styled.h1`
    margin: 0px;
    font-size: 144px;
    line-height: 120px;
    font-weight: 700;
    color: ${corSecundaria};
`

export const Data = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${corSecundaria};
`