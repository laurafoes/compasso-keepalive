import { UserInfoContext } from '../../common/context/UserInfo';
import { PropsUserContext } from '../interfaces/UserInfo';
import { Botao } from './ButtonElements';
import { useContext } from 'react';
import { regexEmail } from '../../helpers/loginHelper';
import { useNavigate } from 'react-router-dom';

export const Button = () => {
    const { user, setErro, existeErro, setExisteErro } = useContext<PropsUserContext>(UserInfoContext);
    const navigateTo = useNavigate();
    
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (regexEmail.test(user.email) && user.password.length > 5) {
            setErro('');
            setExisteErro(false);
            navigateTo('/home');
        } else {
            setErro('Ops, usuário ou senha inválidos. Tente novamente!');
            setExisteErro(true);
        }
    }

    return(
        <Botao onClick={handleSubmit} existeErro={existeErro}>
            Continuar
        </Botao>
    )
}