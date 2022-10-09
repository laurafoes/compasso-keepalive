import { InputUser } from '../../components/Inputs/InputUser/InputUser';
import { InputPassword } from '../../components/Inputs/InputPassword/InputPassword';
import { Form, FormWrapper, ButtonWrapper, Title } from './LoginFormElements';
import { Button } from '../Button';
import { useContext } from 'react';
import { PropsUserContext } from '../interfaces/UserInfo';
import { UserInfoContext } from '../../common/context/UserInfo';
import { InputConfirmPassword } from '../Inputs/InputConfirmPassword';
import { PasswordRequirements } from '../PasswordRequirements';
import { LoginMessage } from '../LoginMessage';
import { InputName } from '../Inputs/InputName';

export const LoginForm = () => {
    const { loginPageTitle } = useContext<PropsUserContext>(UserInfoContext);

    return(
        <Form>
            <FormWrapper>
                <Title>{loginPageTitle}</Title>
                {loginPageTitle === 'Cadastro' ? <InputName /> : ''}
                <InputUser />
                <InputPassword />
                {loginPageTitle === 'Cadastro' ? <InputConfirmPassword /> : ''}
                {loginPageTitle === 'Cadastro' ? <PasswordRequirements /> : ''}
            </FormWrapper>
            <ButtonWrapper>
                <Button />
            </ButtonWrapper>
            <LoginMessage />
        </Form>
    )
}