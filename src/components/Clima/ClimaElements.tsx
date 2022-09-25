import styled from 'styled-components';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { corSecundaria } from '../../assets/styles/variables';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 2.5rem;
`

export const Cidade = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${corSecundaria};
`

export const ClimaWrapper = styled.div`
    display: flex;
    justify-content: center;`

export const Icone = styled(TiWeatherPartlySunny)`
    fill: ${corSecundaria};
    margin-top: 0.4rem;
    margin-right: 0.5rem;
    font-size: 30px;
`
export const Temperatura = styled.h5`
    color: ${corSecundaria};
    font-weight: 700;
`