import styled from 'styled-components';
import logo_image from '../../assets/img/login-image.png';
import { fundoLogin } from '../../assets/styles/variables';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${fundoLogin};
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: space-between;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        flex-direction: row;
    }

`
export const FormContainer = styled.div`
    width: 50%;
    height: 63.4vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 80vh;
        justify-content: space-evenly;
}
`

export const FormTitle = styled.div `
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 70%;
    max-width: 379px;
    margin: 0 auto;
    h1{ 
        line-height: 1px;
    }
    p {
        max-width: 80%;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        h1{
            font-size: 28px;
            margin-top: 3%;
        }
        p {
            font-size: 14px;
        }
    }
`

export const Banner = styled.div `
    width: 50%;
    height: 100vh;
    background-image: url(${logo_image});
    background-size: cover;
    text-align: center;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 20vh;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: 100vh;
    }
`

export const Logo = styled.img`
    width: 306px;
    height: 69px;
    margin-top: 2.1rem;
    @media screen and (max-width: 768px) {
        width: 80%;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        width: 50%;
        height: auto;
    }
`