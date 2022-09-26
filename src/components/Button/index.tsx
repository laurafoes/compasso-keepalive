import { UserInfoContext } from '../../common/context/UserInfo';
import { PropsUserContext } from '../interfaces/UserInfo';
import { Botao } from './ButtonElements';
import { useContext, useEffect } from 'react';
import { validar } from '../../helpers/loginHelper';
import { useNavigate } from 'react-router-dom';

export const Button = () => {
    const { user, erro, setErro, existeErro, setExisteErro } = useContext<PropsUserContext>(UserInfoContext);
    const navigateTo = useNavigate();

    useEffect(() => {
        if(erro === '') {
            setExisteErro(false)
        } else {
            setExisteErro(true)
        }
        console.log(`${existeErro} detecta se existe erro`)
    }, [erro])
    
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setErro(validar(user));
        if(erro) {
            return navigateTo("/home");
        }
    }

    return(
        <Botao onClick={handleSubmit} existeErro={existeErro}>
            Continuar
        </Botao>
    )
}