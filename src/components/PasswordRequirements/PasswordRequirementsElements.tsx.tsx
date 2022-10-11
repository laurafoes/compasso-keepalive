import { BsCheck, BsX } from 'react-icons/bs';
import styled from 'styled-components';
import { invalidPassword, mainColor, validPassword } from '../../assets/styles/variables';

interface Props {
    display?: string,
    registered?: boolean
}

export const Container = styled.div<Props>`
    background-color: ${({registered}) => registered ? 'transparent' : 'rgba(224, 224, 224, 0.3)' };
    padding: 1.5rem;
    border-radius: 24px;;
    border: none;
    transition: ease-in-out 400ms;
    display: ${({display}) => display ? 'block' : 'none' };
    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
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

export const Content = styled.p<Props>`
    font-size: 16px;
    color: ${mainColor};
    text-align: ${({registered}) => registered ? 'none' : 'center' };
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`