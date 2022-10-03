import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 37%;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 1440px) {
            width: 45%;
    }
    @media screen and (max-width: 1024px) {
            width: 30vw;    
    }
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: auto;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
        margin: auto;
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        justify-content: flex-start;
    }
    @media screen and (max-width: 480px) {
        height: 20vh;
        flex-direction: column;
        justify-content: center;

    }
`

export const Mensagem = styled.p`
    width: 50%;
    text-align: right;
    padding-right: 36px;
    @media screen and (max-width: 1024px) {
            width: 50%;
            font-size: 12px;    
    }
    @media screen and (max-width: 768px) and (orientation: landscape) {
        padding: 0;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 0 0 0;
        text-align: center;
    }
`
export const TimerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    @media screen and (max-width: 915px) and (orientation: landscape) {
        height: 100%;
        padding: 1rem;
    }
`

export const Contador = styled.h5`
    font-weight: 700;
    margin-top: -0.75vh;
    line-height: 36px;
    @media screen and (max-width: 915px) and (orientation: landscape) {
        margin-top: 0rem;
        font-size: 32px;
    }
`