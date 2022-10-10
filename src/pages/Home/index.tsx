import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Body, Container, Disclaimer, Footer, FooterBtnWrapper, FooterNavigation, GreetingsContainer, Header, Logo, User } from './HomeElements';
import logo from '../../assets/img/logo-compasso-dark.svg';
import { Mission } from '../../components/Mission';
import { Timer } from '../../components/Timer';
import { FooterBtn } from '../../components/FooterBtn';
import { DisplayDate } from '../../components/DisplayDate';
import { Weather } from '../../components/Weather';
import { WidgetDataProvider } from '../../common/context/WidgetData';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../servcies/FirebaseConfig';

export const Home = () => {
    const userStorage = JSON.parse(localStorage.getItem('user') || '{}');
    const userName = userStorage.displayName;
    const fullUserName = userName?.split(' ');
    const name = fullUserName[0];

    return(
        <Container>
            <Header>
                <Logo src={logo} alt="Logo da compass UOL"/>
                <WidgetDataProvider>
                    <DisplayDate />
                </WidgetDataProvider>
                <Weather />
            </Header>
            <Body>
                <Mission />
            </Body>
            <Footer>
                <GreetingsContainer>
                    Bem-vindo,
                    <User>
                        {name}
                    </User>
                </GreetingsContainer>
                <Disclaimer>
                    <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
                </Disclaimer>
                <FooterNavigation>
                    <Timer />
                    <FooterBtnWrapper>
                        <a href="http://google.com" target="_blank">
                            <FooterBtn variant={true}>Continuar navegando</FooterBtn>
                        </a>
                        <Link to="/">
                            <FooterBtn variant={false}>Logout</FooterBtn>
                        </Link>
                    </FooterBtnWrapper>
                </FooterNavigation>
            </Footer>
        </Container>
    )
}