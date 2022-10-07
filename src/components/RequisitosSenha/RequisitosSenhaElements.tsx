import { BsCheck, BsX } from 'react-icons/bs';
import styled from 'styled-components';
import { corErro, corPrincipal, corSecundaria, senhaInvalida, senhaValida } from '../../assets/styles/variables';

export const Container = styled.div`
    background-color: rgba(224, 224, 224, 0.3);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 24px;;
    border: none;
`

export const Titulo = styled.p`
    color: ${corPrincipal};
    margin-bottom: 1rem;
`
export const Item = styled.p`
    display: flex;
    align-items: center;
`
//receber props para alerar a cor
export const Valido = styled(BsCheck)`
    fill: ${senhaValida};
    font-size: 28px;
`

export const Erro = styled(BsX)`
    fill: ${senhaInvalida};
    font-size: 28px;
`

export const Conteudo = styled.p`
    font-size: 16px;
    color: ${corPrincipal};
    padding: 0.3rem 0;
`