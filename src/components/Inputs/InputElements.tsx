import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { TiLockClosedOutline } from 'react-icons/ti';
import { corErro } from '../../assets/styles/variables';

interface Props {
    existeErro?: boolean,
    icone?: boolean
}

export const Container = styled.div`
    width: 100%;
    max-width: 379px;
    position: relative;
    `

export const Input = styled.input<Props>`
    width: 100%;
    border-color: ${({existeErro}) => existeErro ? corErro : 'white' };
    border-width: 1px;
    border-radius: 50px;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-bottom: 2.7vh;
    padding: 20px;
    &::placeholder {
        color: white;
    }
`

export const UserIcon = styled(AiOutlineUser)<Props>`
    position: absolute;
    transition: ease 300ms;
    right: ${({icone}) => icone ? "2rem" : "-2.25rem" };
    top: 0.75rem;
    font-size: 26px;
`
export const PasswordIcon = styled(TiLockClosedOutline)<Props>`
    position: absolute;
    transition: ease 300ms;
    right: ${({icone}) => icone ? "2rem" : "-2.5rem" };
    top: 0.75rem;
    font-size: 32px;
`
export const MensagemErro = styled.p<Props>`
    text-align: center;
    color: ${corErro};
    font-weight: 700;
    line-height: 20.28px;
`