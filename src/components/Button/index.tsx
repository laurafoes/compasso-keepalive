import { UserInfoContext } from '../../common/context/UserInfo';
import { PropsUserContext } from '../interfaces/UserInfo';
import { NextButton } from './ButtonElements';
import { useContext } from 'react';
import { regexEmail } from '../../helpers/loginHelper';
import { useNavigate } from 'react-router-dom';

export const Button = () => {
    const { user, setError, errorExists, setErrorExists } = useContext<PropsUserContext>(UserInfoContext);
    const navigateTo = useNavigate();
    
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (regexEmail.test(user.email) && user.password.length > 5) {
            setError('');
            setErrorExists(false);
            navigateTo('/home');
        } else {
            setError('Ops, usuário ou senha inválidos. Tente novamente!');
            setErrorExists(true);
        }
    }

    return(
        <NextButton onClick={handleSubmit} errorExists={errorExists}>
            Continuar
        </NextButton>
    )
}