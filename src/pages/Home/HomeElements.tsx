import styled from 'styled-components';
import Compasso from '../../assets/img/bola-LogoCompasso.svg';
import { footerBackground, homeBackground, mainColor } from '../../assets/styles/variables';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: ${homeBackground};
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: auto;
        overflow: visible;
    }
    @media screen and (max-width: 480px) {
        overflow: visible;
    }
`

export const Header = styled.nav`
    width: 100%;
    height: 15.65vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 2.3vh;
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: auto;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        height: 25vh;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 1rem;
    }
    @media screen and (max-width: 480px) {
        height: 20%;
        justify-content: space-around;
    }
`

export const Logo = styled.img`
    margin: 0 3.7vh;
    width: 150px;
    height: 42px;
    transition: ease 800ms;
    @media screen and (max-width: 915px) and (orientation: landscape) {
        width: 200px;
        height: auto;
        margin-left: 2rem;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        margin: 0;
    }
    @media screen and (max-width: 480px) {
        width: 275px;
        height: auto;
        margin-bottom: -5%
    }
`
export const Body = styled.main`
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: flex-end;
    padding-right: 7%;
    background-image: url(${Compasso});
    background-size: 42.96vw 76.3vh;
    background-position-y: 5.5vh;
    background-position-x: -6.1vw;
    background-repeat: no-repeat;
    transition: ease 1000ms;
    @media screen and (max-width: 1440px) {
        background-size: 47vw 68.5vh;
        background-position-y: 15vh;
        background-position-x: -6.1vw;
    }
    @media screen and (max-width: 1024px) {
        background-size: 27vw 48.5vh;
        background-position-y: 30vh;
        background-position-x: -3.1vw;
    }
    @media screen and (max-width: 1024px) and (orientation: landscape) {
        height: 74.5%;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: 86vh;
        background-image: none;
    }
    @media screen and (max-width: 768px) {
        background-image: none;
        height: 50%;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        height: 75vh;
    }
    @media screen and (max-width: 480px) {
        background-image: none;
        height: 61%;
    }
    
`

export const Footer = styled.footer`
    width: 100%;
    height: 9.5%;
    display: flex;
    align-items: center;
    background: ${footerBackground};
    @media screen and (max-width: 1024px) and (orientation: landscape) {
        height: 10%;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: auto;
    }
    @media screen and (max-width: 768px) {
        height: 25%;
        flex-direction: column-reverse;
        justify-content: space-between;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        flex-direction: column-reverse;
        
    }
    @media screen and (max-width: 480px) {
        height: auto;
        flex-direction: column-reverse;
    }
`

export const GreetingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 5%;
    margin-left: 2rem;
    justify-content: flex-start;
    @media screen and (max-width: 1440px) {
        width: 7%;
    }
    @media screen and (max-width: 1280px) {
        width: 10%;
    }
    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin: 0;
        flex-direction: row;
        padding: 1rem 0;
        width: 100%;
        order: 1;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 480px) {
        padding-top: 1.5rem;
    }
`

export const User = styled.h6`
    font-size: 32px;
    font-weight: 600;
    @media screen and (max-width: 768px) {
        font-size: 28px;
        margin-bottom: 0.25rem;
        margin-left: 0.5rem;;
    }
    @media screen and (max-width: 468px) {
        font-size: 24px;
    }
`

export const Disclaimer = styled.p`
    width: 50%;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    padding-right: 1vw;
    border-right: 1px solid ${mainColor};
    transition: 1000ms;
    p {
        width: 541px;
        font-size: 12px;
        padding: 0.5rem;
        @media screen and (max-width: 1024px) {
            font-size: 12px;
            width: 350px;
        }
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
    @media screen and (max-width: 1024px) {
        width: 40%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0.7rem;
        border: none;
        justify-content: center;
        text-align: center;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        width: 100%;
        padding: 1.5rem;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 3rem 1rem 3rem 1rem;
    }
`

export const FooterNavigation = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    transition: 1000ms;
    @media screen and (max-width: 1024px) {
        height:  100%;
        width: 60%;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: 100%;
    }
     @media screen and (max-width: 768px) {
        flex-direction: row; 
        width: 100%;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        width: 100%;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column; 
        width: 100%;
    }
`

export const FooterBtnWrapper = styled.div`
    height: 100%;
    width: 260px;
    @media screen and (max-width: 1024px) {
        width: 45%;
    }
    @media screen and (max-width: 1024px) and (orientation: landscape) {
        width: 40%;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        width: 60%;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`