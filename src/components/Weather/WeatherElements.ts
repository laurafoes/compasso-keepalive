import styled from 'styled-components';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { secondaryColor } from '../../assets/styles/variables';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2.5rem;
    @media screen and (max-width: 768px) {
        margin: 0 1rem;
    }
    @media screen and (max-width: 768px) {
        margin: 0;
    }
`

export const City = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${secondaryColor};
`

export const WeatherWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
    @media screen and (max-width: 480px) {
        margin-top: -0.2rem;
    }
`

export const Icon = styled(TiWeatherPartlySunny)`
    fill: ${secondaryColor};
    margin-top: 0.4rem;
    margin-right: 0.5rem;
    font-size: 30px;
    @media screen and (max-width: 768px) {
        font-size: 26px;
    }
`
export const Temperature = styled.h5`
    color: ${secondaryColor};
    font-weight: 700;
    @media screen and (max-width: 768px) {
        font-size: 36px;
    }
    @media screen and (max-width: 480px) {
        font-size: 24px;
        margin-top: 0.5rem;
    }
`