import styled from 'styled-components';
import { highlightColor, mainColor } from '../../assets/styles/variables';

interface Props {
    variant: boolean
}

export const Button = styled.button<Props>`
    height: 9.26vh;
    width: 50%;
    font-size: 12px;
    margin-top: -0.56rem;
    padding: 0.75rem 0.25rem 0 0.25rem;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    color: ${({variant}) => variant ? highlightColor : mainColor };
    background-color: ${({variant}) => variant ? "white" : "transparent"};
    @media screen and (max-width: 1024px) {
        margin-top: 0rem;
    }
    @media screen and (max-width: 1024px) and (orientation: landscape) {        
        padding-top: 0.45rem;
        margin-top: -0.44rem;
        line-height: 14px;
        height: 100%;
    }
    @media screen and (max-width: 915px) {
        height: 100%;
        margin-top: -0.45rem;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: 5.5rem;
    }
    @media screen and (max-width: 768px) {
        margin-top: -0.46rem;
        height: 100%;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        height: 5.5rem;
    }
    @media screen and (max-width: 480px) {
        height: 8rem;
    }
`