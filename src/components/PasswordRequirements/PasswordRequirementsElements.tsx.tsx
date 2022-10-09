import { BsCheck, BsX } from 'react-icons/bs';
import styled from 'styled-components';
import { invalidPassword, mainColor, validPassword } from '../../assets/styles/variables';

export const Container = styled.div`
    background-color: rgba(224, 224, 224, 0.3);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 24px;;
    border: none;
`

export const Title = styled.p`
    color: ${mainColor};
    margin-bottom: 1rem;
`
export const Item = styled.p`
    display: flex;
    align-items: center;
`
//receber props para alerar a cor
export const Valid = styled(BsCheck)`
    fill: ${validPassword};
    font-size: 28px;
`

export const Invalid = styled(BsX)`
    fill: ${invalidPassword};
    font-size: 28px;
`

export const Content = styled.p`
    font-size: 16px;
    color: ${mainColor};
    padding: 0.3rem 0;
`