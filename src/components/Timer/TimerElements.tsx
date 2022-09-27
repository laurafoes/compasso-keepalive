import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 37%;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 1024px) {
            width: 30vw;    
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        flex-direction: column;
        margin-bottom: 1rem;
    }
`

export const Mensagem = styled.p`
    width: 50%;
    text-align: right;
    padding-right: 36px;
    @media screen and (max-width: 1024px) {
            width: 50%;    
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 2rem 0 0 0;
        text-align: center;
    }
`
export const TimerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
`

export const Contador = styled.h5`
    font-weight: 700;
    margin-top: -0.75vh;
    line-height: 36px;
`