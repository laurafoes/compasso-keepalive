import { InputUser } from '../../components/Inputs/InputUser/InputUser';
import { InputRegisterPassword } from '../Inputs/InputRegisterPassword/InputRegisterPassword';
import { Form, FormWrapper, ButtonWrapper, Title } from './LoginFormElements';
import { Button } from '../Button';
import { useContext, } from 'react';
import { PropsUserContext } from '../interfaces/UserInfo';
import { UserInfoContext } from '../../common/context/UserInfo';
import { InputConfirmPassword } from '../Inputs/InputConfirmPassword';
import { PasswordRequirements } from '../PasswordRequirements';
import { LoginMessage } from '../LoginMessage';
import { InputName } from '../Inputs/InputName';
import { InputLoginPassword } from '../Inputs/InputLoginPassword/InputLoginPassword';
export const LoginForm = () => {
    const { loginPageTitle } = useContext<PropsUserContext>(UserInfoContext);
    const paginaDeLogin = loginPageTitle === 'Cadastro';

    return(
        <Form>
            <FormWrapper>
                <Title>{loginPageTitle}</Title>
                {paginaDeLogin ? <InputName /> : ''}
                <InputUser />
                {paginaDeLogin ? <InputRegisterPassword /> : <InputLoginPassword />}
                {paginaDeLogin ? <InputConfirmPassword /> : ''}
                {paginaDeLogin ? <PasswordRequirements /> : ''}
            </FormWrapper>
            <ButtonWrapper>
                <Button />
            </ButtonWrapper>
            <LoginMessage />
        </Form>
    )
}