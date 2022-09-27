import styled from 'styled-components';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { corSecundaria } from '../../assets/styles/variables';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2.5rem;
    @media screen and (max-width: 768px) {
        margin: 0 1rem;
    }
`

export const Cidade = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${corSecundaria};
`

export const ClimaWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
        justify-content: flex-start;
    }
`

export const Icone = styled(TiWeatherPartlySunny)`
    fill: ${corSecundaria};
    margin-top: 0.4rem;
    margin-right: 0.5rem;
    font-size: 30px;
    @media screen and (max-width: 768px) {
        font-size: 26px;
    }
`
export const Temperatura = styled.h5`
    color: ${corSecundaria};
    font-weight: 700;
    @media screen and (max-width: 768px) {
        font-size: 36px;
    }
`