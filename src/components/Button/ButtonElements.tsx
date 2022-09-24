import styled from 'styled-components';
import { corDestaque } from '../../assets/styles/variables';

export const Botao = styled.a`
    font-size: 18px;
    font-weight: 700;
    padding: 23px;
    background-color: ${corDestaque};
    border-radius: 50px;
    width: 100%;
    text-align: center;
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
    transition: ease-in-out 300ms;
    cursor: pointer;
    margin-top: 7rem;
    &:hover {
        transform: scale(1.02);
    }
`