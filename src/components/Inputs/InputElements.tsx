import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { TiLockClosedOutline } from 'react-icons/ti';
import { errorColor } from '../../assets/styles/variables';

interface Props {
    errorExists?: boolean,
    icons?: boolean,
    user?: string,
    placeholder?: string
}

export const Container = styled.div`
    width: 100%;
    max-width: 379px;
    position: relative;
`

export const Input = styled.input<Props>`
    width: 100%;
    border-color: ${({errorExists}) => errorExists ? errorColor : 'white' };
    border-width: 1px;
    border-radius: 50px;
    outline: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-bottom: 2.7vh;
    height: 5.5vh;
    padding-left: 1rem;
    padding-right: 4rem;
    font-size: ${({user}) => !user ? '16px' : '56px'};
    &::placeholder {
        color: white;
    }
    @media screen and (max-width: 480px){
        font-size: 16px;
        padding-right: 15%;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: 2rem;
        padding-right: 2.5rem;
        font-size: 16px;
        margin-bottom: 3%;
    }
`
export const PasswordInput = styled.input<Props>`
    font-size: ${({user}) => user !== '' ? '16px' : '56px'};
`

export const RegisterPassWordInput = styled.input<Props>`
    font-size: ${({user}) => user !== '' ? '16px' : '56px'};
`

export const ConfirmPassword = styled.input<Props>`
    font-size: ${({user}) => user !== '' ? '16px' : '56px'};
`

export const UserIcon = styled(AiOutlineUser)<Props>`
    position: absolute;
    transition: ease 300ms;
    right: ${({icons}) => icons ? "6.5%" : "-12%" };
    top: 1.2vh;
    font-size: 26px;
    @media screen and (max-width: 1440px){
        top: 0.6rem;
    }
    @media screen and (max-width: 1024px){
        right: ${({icons}) => icons ? "4%" : "-9%" };
        top: 0.5rem;
    }
    @media screen and (max-width: 768px) {
        right: ${({icons}) => icons ? "5%" : "-10%" };
        font-size: 26px;
        top: 25%;
    }
    @media screen and (max-width: 480px) {
        right: ${({icons}) => icons ? "3vw" : "-3.5vh" };
        font-size: 20px;
        top: 20%;
    }
    //rever esse!
    @media screen and (max-width: 915px) and (orientation: landscape) {
        right: ${({icons}) => icons ? "5%" : "-10%" };
        font-size: 20px;
        top: 0.3rem;
    }
`
export const PasswordIcon = styled(TiLockClosedOutline)<Props>`
    position: absolute;
    transition: ease 300ms;
    right: ${({icons}) => icons ? "6%" : "-13%" };
    top: 1.1vh;
    font-size: 32px;
    @media screen and (max-width: 1440px){
        top: 0.6rem;
        font-size: 30px;
    }
    @media screen and (max-width: 1024px){
        right: ${({icons}) => icons ? "3%" : "-10%" };
        top: 0.3rem;
    }
    @media screen and (max-width: 768px) {
        right: ${({icons}) => icons ? "3.5%" : "-11%" };
        top: 20%;
        font-size: 32px;
    }
    @media screen and (max-width: 480px) {
        right: ${({icons}) => icons ? "3vw" : "-3.5vh" };
        font-size: 22px;
        top: 25%;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        right: ${({icons}) => icons ? "5%" : "-10.5%" };
        font-size: 22px;
        top: 0.3rem;
    }
`
export const ErrorMessage = styled.p<Props>`
    text-align: center;
    color: ${errorColor};
    font-weight: 700;
    line-height: 20.28px;
    @media screen and (max-width: 768px){
        font-size: 14px;
        line-height: 14px;
    }
`