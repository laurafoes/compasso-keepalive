import logo from '../../assets/img/logo-light.svg';
import { Container, FormContainer, Banner, FormTitle, Logo } from './InitialPageElements';
import { UserInfoContext, UserInfoProvider } from '../../common/context/UserInfo';
import { PasswordProvider } from '../../common/context/Password';
import { Outlet, useLocation } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm';
import { useContext, useEffect, useState } from 'react';
import { PropsUserContext } from '../../components/interfaces/UserInfo';

export const InitialPage = () => {
    const { setError, setErrorExists, loginPageTitle, getCurrentLocation } = useContext<PropsUserContext>(UserInfoContext);
    const [ isLoginPage, setIsLoginPage ] = useState<boolean>(true)
    let location = useLocation();

    useEffect(() => {
        getCurrentLocation();
    }, [location])
    
    useEffect(() => {
        if(loginPageTitle === 'Login') {
            setIsLoginPage(true)
        } else {
            setIsLoginPage(false)
            setError('');
            setErrorExists(false);
        }
    }, [loginPageTitle])

    console.log(loginPageTitle)

    return(
        <Container>
            <FormContainer>
                <FormTitle>
                    <h1>Olá,</h1>
                    <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
                </FormTitle>
                <UserInfoProvider>
                    <PasswordProvider>
                        <LoginForm isLoginPage={isLoginPage} />
                    </PasswordProvider>
                </UserInfoProvider>
            </FormContainer>
            <Banner>
                <Logo src={logo} />
            </Banner>
        </Container>
    )
}