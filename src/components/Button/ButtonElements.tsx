import styled from 'styled-components';
import { corDestaque } from '../../assets/styles/variables';

interface Props {
    existeErro?: boolean
}

export const Botao = styled.button<Props>`
    font-size: 18px;
    font-weight: 700;
    height: 6.2vh;
    background-color: ${corDestaque};
    border-radius: 50px;
    border: none;
    width: 100%;
    text-align: center;
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
    transition: ease-in-out 300ms;
    cursor: pointer;
    align-self: flex-end;
    &:hover {
        transform: scale(1.01);
    }
`