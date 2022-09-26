import styled from 'styled-components';
import logo_image from '../../assets/img/login-image.png';
import { fundoLogin } from '../../assets/styles/variables';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${fundoLogin};
    display: flex;
    align-items: center;
`
export const FormContainer = styled.div`
    width: 50%;
    height: 63.4vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FormTitle = styled.div `
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 70%;
    max-width: 379px;
    margin: 0 auto;
    h1{ 
        line-height: 76px;
    }
    p {
        max-width: 80%;
    }
`

export const Banner = styled.div `
    width: 50%;
    height: 100vh;
    background-image: url(${logo_image});
    background-size: cover;
    text-align: center;
`

export const Logo = styled.img`
    width: 306px;
    height: 69px;
    margin-top: 2.1rem;
`