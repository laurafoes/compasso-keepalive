import styled from 'styled-components';
import compasso from '../../assets/img/bola-logoCompasso.svg';
import { corPrincipal, corSecundaria, fundoFooter, fundoHome } from '../../assets/styles/variables';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: ${fundoHome};
`

export const Header = styled.nav`
    width: 100%;
    height: 15.65vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;`
export const Logo = styled.img`
    margin: 1.5rem 2.5rem;
    width: 150px;
    height: 42px;
`
export const Body = styled.main`
    width: 100%;
    height: 75.09vh;
    display: flex;
    justify-content: flex-end;
    background-image: url(${compasso});
    background-size: 825px 825px;
    background-position-y: 1rem;
    background-position-x: -7.5rem;
    background-repeat: no-repeat;
`

export const Footer = styled.footer`
    width: 100%;
    height: 9.26vh;
    display: flex;
    align-items: center;
    background: ${fundoFooter};
`

export const Disclaimer = styled.p`
    width: 50%;
    text-align: right;
    border-right: 1px solid ${corPrincipal};
    p {
        width: 541px;
        font-size: 12px;
        padding: 0.5rem;
        margin-left: 40%;
    }
`

export const FooterNavigation = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const FooterBtnWrapper = styled.div`
    height: 100%;
`