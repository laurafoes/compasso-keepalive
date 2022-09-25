import styled from 'styled-components';
import { corDestaque, corSecundaria } from '../../assets/styles/variables';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`

export const Destaque = styled.h3`
    color: ${corDestaque};
    font-weight: 700;
`

export const Traducao = styled.p`
    color: ${corSecundaria};
`
export const DestaqueGrande = styled.h2`
    color: ${corDestaque};
    font-weight: 700;
`