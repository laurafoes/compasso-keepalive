import { Form, FormWrapper, ButtonWrapper, Title } from './LoginFormElements';
import { Button } from '../Button';
import { useContext, useEffect, } from 'react';
import { PropsUserContext } from '../interfaces/UserInfo';
import { UserInfoContext } from '../../common/context/UserInfo';
import { PasswordRequirements } from '../PasswordRequirements';
import { LoginMessage } from '../LoginMessage';
import Input from '../Input';
import { ErrorMessage, SuccessMessage } from '../Input/InputElements';

interface LoginFormProps {
    isLoginPage: boolean
}

export const LoginForm = ({ isLoginPage }: LoginFormProps) => {
    const { 
        error,
        logged,
        loginPageTitle, 
        setRegistered
     } = useContext<PropsUserContext>(UserInfoContext);

     useEffect(() =>{
         if(!isLoginPage) {
             setRegistered(true);
         }
     }, [])

    return(
        <Form>
            <FormWrapper>
                <Title>
                    { loginPageTitle }
                </Title>
                { !isLoginPage ? 
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
                { !isLoginPage ? 
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
                { !isLoginPage ? 
                    <Input 
                        type='password'
                        placeholder='Confirmar senha'
                        inputName='confirmPassword'
                        className='ConfirmPassword'
                    /> 
                : null }
                { isLoginPage ? 
                    <PasswordRequirements /> 
                : null }
                 <ErrorMessage>
                    { isLoginPage ? error : null }
                </ErrorMessage>
                <SuccessMessage>
                    { logged ? 'Usuário autenticado com sucesso! Aguarde o redirecionamento' : null }
                </SuccessMessage>
            </FormWrapper>
            <ButtonWrapper>
                <Button />
            </ButtonWrapper>
            <LoginMessage />
        </Form>
    )
}