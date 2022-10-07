import React from 'react';
import { useContext } from 'react';
import { UserInfoContext } from '../../../common/context/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropsUserContext } from '../../interfaces/UserInfo';
import { Container, Input, MensagemErro, PasswordIcon } from '../InputElements';

export const InputConfirmPassword = () => {
    const { user, setUser, erro, existeErro, icone, setIcone } = useContext<PropsUserContext>(UserInfoContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
        setIcone({...icone, [e.target.name]: true});
    }

    return(
        <Container>
            <Input
                type="password"
                placeholder="Confirmar senha"
                name="confirmpassword"
                className="password_size"
                onChange={((e: any) => handleChange(e))}
                existeErro={existeErro}
                user={user.password}
            >
            </Input>
            <PasswordIcon icone={icone.password}>
                <FontAwesomeIcon icon="fa-regular fa-lock-keyhole" />
            </PasswordIcon>
            <MensagemErro>
                {erro}
            </MensagemErro>
        </Container>
    )
}