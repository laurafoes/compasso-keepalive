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
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FormTitle = styled.div `
    text-align: left;
    max-width: 379px;
    margin: 0 auto;
    margin-bottom: 8rem;
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