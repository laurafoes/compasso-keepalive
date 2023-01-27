import { Form, FormWrapper, ButtonWrapper, Title } from './LoginFormElements';
import { Button } from '../Button';
import { useContext, } from 'react';
import { PropsUserContext } from '../interfaces/UserInfo';
import { UserInfoContext } from '../../common/context/UserInfo';
import { PasswordRequirements } from '../PasswordRequirements';
import { LoginMessage } from '../LoginMessage';
import Input from '../Input';
import { ErrorMessage, SuccessMessage } from '../Input/InputElements';

export const LoginForm = () => {
    const { 
        error,
        logged,
        loginPageTitle, 
        setRegistered
     } = useContext<PropsUserContext>(UserInfoContext);
    const paginaDeLogin = loginPageTitle === 'Cadastro';

    if(!loginPageTitle) {
        setRegistered(true);
    }

    return(
        <Form>
            <FormWrapper>
                <Title>
                    { loginPageTitle }
                </Title>
                { paginaDeLogin ? 
                    <Input 
                        type='text' 
                        placeholder='Nome' 
                        inputName='nome' 
                    /> 
                : null }
                <Input
                    type='text' 
                    placeholder='E-mail' 
                    inputName='email' 
                />
                { paginaDeLogin ? 
                    <Input
                        type='password' 
                        placeholder='Senha' 
                        inputName='registerPassword' 
                        className='RegisterPassWordInput' 
                    /> 
                : <Input
                    type='password'
                    placeholder='Senha'
                    inputName='password'
                    className='PasswordInput'
                />}
                { paginaDeLogin ? 
                    <Input 
                        type='password'
                        placeholder='Confirmar senha'
                        inputName='confirmPassword'
                        className='ConfirmPassword'
                    /> 
                : null }
                { paginaDeLogin ? 
                    <PasswordRequirements /> 
                : null }
                 <ErrorMessage>
                    { loginPageTitle === 'Login' ? error : '' }
                </ErrorMessage>
                <SuccessMessage>
                    { logged ? 'Usuário autenticado com sucesso! Aguarde o redirecionamento' : '' }
                </SuccessMessage>
            </FormWrapper>
            <ButtonWrapper>
                <Button />
            </ButtonWrapper>
            <LoginMessage />
        </Form>
    )
}