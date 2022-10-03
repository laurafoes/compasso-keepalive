import styled from 'styled-components';
import compasso from '../../assets/img/bola-logoCompasso.svg';
import { corPrincipal, fundoFooter, fundoHome } from '../../assets/styles/variables';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: ${fundoHome};
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
    background-image: url(${compasso});
    background-size: 42.96vw 76.3vh;
    background-position-y: 5.5vh;
    background-position-x: -6.1vw;
    background-repeat: no-repeat;
    transition: ease 1000ms;
    @media screen and (max-width: 1440px) {
        background-size: 27vw 48.5vh;
        background-position-y: 0;
        background-position-x: -6.1vw;
    }
    @media screen and (max-width: 1024px) {
        background-size: 27vw 48.5vh;
        background-position-y: 0;
        background-position-x: -6.1vw;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: 86vh;
        background-image: none;
    }
    @media screen and (max-width: 768px) {
        background-image: none;
        height: 60%;
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
    background: ${fundoFooter};
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: auto;
    }
    @media screen and (max-width: 768px) {
        height: 15%;
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

export const Disclaimer = styled.p`
    width: 50%;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    padding-right: 1vw;
    border-right: 1px solid ${corPrincipal};
    transition: 1000ms;
    p {
        width: 541px;
        font-size: 12px;
        padding: 0.5rem;
        @media screen and (max-width: 1024px) {
            font-size: 12px;
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
    height: auto;
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