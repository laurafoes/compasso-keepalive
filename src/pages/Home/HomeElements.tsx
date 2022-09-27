import styled from 'styled-components';
import compasso from '../../assets/img/bola-logoCompasso.svg';
import { corPrincipal, fundoFooter, fundoHome } from '../../assets/styles/variables';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: ${fundoHome};
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
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        height: 25vh;
    }
    @media screen and (max-width: 480px) {
        height: 30vh;
    }
`

export const Logo = styled.img`
    margin: 0 3.7vh;
    width: 150px;
    height: 42px;
    transition: ease 800ms;
`
export const Body = styled.main`
    width: 100%;
    height: 75.09vh;
    display: flex;
    justify-content: flex-end;
    padding-right: 7vw;
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
        background-image: none;
    }
    @media screen and (max-width: 768px) {
        height: 65.75vh;
    }
    
`

export const Footer = styled.footer`
    width: 100%;
    height: 9.25vh;
    display: flex;
    align-items: center;
    background: ${fundoFooter};
    @media screen and (max-width: 480px) {
        height: auto;
        flex-direction: column;
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
            font-size: 11px;
        }
    }
    @media screen and (max-width: 1024px) {
            width: 40%;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 3rem 1rem 1rem 1rem;
        border: none;
        text-align: center;
    }
`

export const FooterNavigation = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    transition: 1000ms;
    @media screen and (max-width: 1024px) {
            width: 60%;
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
        width: 40%;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`