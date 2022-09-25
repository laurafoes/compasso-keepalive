import styled from 'styled-components';
import { corDestaque, corPrincipal } from '../../assets/styles/variables';

interface Props {
    variant: boolean
}

export const Button = styled.button<Props>`
    height: 100%;
    width: 8.15rem;
    font-size: 12px;
    margin: 0;
    border: none;
    cursor: pointer;
    color: ${({variant}) => variant ? corDestaque : corPrincipal };
    background-color: ${({variant}) => variant ? "white" : "transparent"};
`