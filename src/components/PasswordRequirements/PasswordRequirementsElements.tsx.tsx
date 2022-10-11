import { BsCheck, BsX } from 'react-icons/bs';
import styled from 'styled-components';
import { invalidPassword, mainColor, validPassword } from '../../assets/styles/variables';

interface Props {
    display?: string
}

export const Container = styled.div<Props>`
    background-color: rgba(224, 224, 224, 0.3);
    padding: 1.5rem;
    border-radius: 24px;;
    border: none;
    transition: ease-in-out 400ms;
    display: ${({display}) => display ? 'block' : 'none' };
`

export const Title = styled.p`
    color: ${mainColor};
    line-height: 20px;
`
export const Item = styled.div`
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
`