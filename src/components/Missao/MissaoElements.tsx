import styled from 'styled-components';
import { corDestaque, corSecundaria } from '../../assets/styles/variables';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    align-items: flex-end;
    margin: 0;
    width: 65%;
    @media screen and (max-width: 1280px) {
        width: 90%;
        margin-top: -3rem;
    }
    @media screen and (max-width: 1024px) {
        width: 90%;
        margin-top: -3rem;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        overflow: visible;
        margin: 1rem 0;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        margin: 1rem 0;
    }
    @media screen and (max-width: 480px) {
        width: 80%;
        margin: auto 3%;
        height: auto;
    }
`

export const Destaque = styled.h3`
    color: ${corDestaque};
    font-weight: 700;
    font-size: 36px;
    line-height: 4.25vh;
    @media (max-width: 1024px) {
        font-size: 28px;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        font-size: 20px;
    }
    @media (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        font-size: 20px;
    }
    @media (max-width: 480px) {
        font-size: 20px;
    }
    @media (max-width: 300px) {
        font-size: 18px;
    }
`

export const Traducao = styled.p`
    color: ${corSecundaria};
    font-size: 30px;
    line-height: 30px;
    @media (max-width: 1024px) {
        font-size: 22px;
        line-height: 22px;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        font-size: 16px;
    }
    @media (max-width: 768px) {
        font-size: 18px;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        font-size: 16px;
    }
    @media (max-width: 480px) {
            font-size: 16px;
            line-height: 16px;
    }
    @media (max-width: 300px) {
        font-size: 14px;
        line-height: 14px;
    }
`
export const DestaqueGrande = styled.h2`
    color: ${corDestaque};
    font-weight: 700;
    font-size: 64px;
    line-height: 81px;
    @media (max-width: 1440px) {
        font-size: 48px;
        line-height: 52px;
    }
    @media (max-width: 1024px) {
        font-size: 42px;
        line-height: 52px;
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        font-size: 30px;
        line-height: 40px;
    }
    @media (max-width: 768px) {
        font-size: 32px;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        font-size: 28px;
        line-height: 24px;
    }
    @media (max-width: 480px) {
        font-size: 24px;
        line-height: 40px;
    }
    @media (max-width: 300px) {
        line-height: 30px;
    }
`