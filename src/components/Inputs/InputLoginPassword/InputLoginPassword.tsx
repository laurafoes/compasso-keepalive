import { useEffect, useContext } from 'react';
import { UserInfoContext } from '../../../common/context/UserInfo';
import { PropsUserContext } from '../../interfaces/UserInfo';
import { Container, ErrorMessage, Input, PasswordIcon, SuccessMessage } from '../InputElements';
import { AiOutlineUnlock } from 'react-icons/ai';

export const InputLoginPassword = () => {
    const { 
            userInfo, 
            error,
            errorExists, 
            icons, 
            loginPageTitle,
            handleChange, 
            logged 
        } = useContext<PropsUserContext>(UserInfoContext);

    return(
        <Container>
            <Input
                type="password"
                placeholder="Senha"
                name="password"
                className="PasswordInput"
                onChange={(e: any) => handleChange(e)}
                errorExists={errorExists}
                user={userInfo.password}
            />
            <PasswordIcon icons={icons.password}>
                <AiOutlineUnlock />
            </PasswordIcon>
            <ErrorMessage>
                {loginPageTitle === 'Login' ? error : ''}
            </ErrorMessage>
            <SuccessMessage>
                {logged ? 'Usuário autenticado com sucesso! Aguarde o redirecionamento' : ''}
            </SuccessMessage>
        </Container>
    )
}