import logo from '../../assets/img/logo-light.svg';
import { Container, FormContainer, Banner, FormTitle, Logo } from './LoginElements';
import { UserInfoProvider } from '../../common/context/UserInfo';
import { Outlet } from 'react-router-dom';

export const PaginaInicial = () => {
    return(
        <Container>
            <FormContainer>
                <FormTitle>
                    <h1>Olá,</h1>
                    <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
                </FormTitle>
                <UserInfoProvider>
                    <Outlet />
                </UserInfoProvider>
            </FormContainer>
            <Banner>
                <Logo src={logo} />
            </Banner>
        </Container>
    )
}