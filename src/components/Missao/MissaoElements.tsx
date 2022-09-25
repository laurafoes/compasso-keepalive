import styled from 'styled-components';
import { corDestaque, corSecundaria } from '../../assets/styles/variables';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    width: 52.55vw;
`

export const Destaque = styled.h3`
    color: ${corDestaque};
    font-weight: 700;
    line-height: 46px;
`

export const Traducao = styled.p`
    color: ${corSecundaria};
    font-size: 24px;
    line-height: 30px;
`
export const DestaqueGrande = styled.h2`
    color: ${corDestaque};
    font-weight: 700;
    line-height: 81px;
`