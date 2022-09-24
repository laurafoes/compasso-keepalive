import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { TiLockClosedOutline } from 'react-icons/ti';

export const Container = styled.div`
    width: 379px;
    position: relative;
    `

export const Input = styled.input`
    width: 100%;
    border: 1px solid white;
    border-radius: 50px;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-bottom: 1.9rem;
    padding: 20px;
        &::placeholder {
            color: white;
    }
`

export const UserIcon = styled(AiOutlineUser)`
    position: absolute;
    right: -2.25rem;
    top: 1rem;
    font-size: 24px;
`
export const PasswordIcon = styled(TiLockClosedOutline)`
    position: absolute;
    right: -2.25rem;
    top: 1rem;
    font-size: 24px;
`