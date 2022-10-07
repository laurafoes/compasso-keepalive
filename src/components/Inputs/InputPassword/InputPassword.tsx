import { useContext } from 'react';
import { UserInfoContext } from '../../../common/context/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropsUserContext } from '../../interfaces/UserInfo';
import { Container, Input, MensagemErro, PasswordIcon } from '../InputElements';

export const InputPassword = () => {
    const { user, erro, existeErro, icone,  tituloPagInicial, handleChange } = useContext<PropsUserContext>(UserInfoContext);


    return(
        <Container>
            <Input
                type="password"
                placeholder="Senha"
                name="password"
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
                {tituloPagInicial === 'Login' ? erro : ''}
            </MensagemErro>
        </Container>
    )
}