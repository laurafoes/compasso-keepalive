import { Link } from 'react-router-dom';
import { Body, Container, Disclaimer, Footer, FooterBtnWrapper, FooterNavigation, Header, Logo } from './HomeElements';
import logo from '../../assets/img/logo-compasso-dark.svg';
import { Missao } from '../../components/Missao';
import { Timer } from '../../components/Timer';
import { FooterBtn } from '../../components/FooterButton';
import { DisplayData } from '../../components/DisplayData';
import { Clima } from '../../components/Clima';
import { WidgetDataProvider } from '../../common/context/WidgetData';

export const Home = () => {
    return(
        <Container>
            <Header>
                <Logo src={logo} />
                <WidgetDataProvider>
                    <DisplayData />
                </WidgetDataProvider>
                <Clima />
            </Header>
            <Body>
                <Missao />
                Home
                <Link  to="/">Login page</Link>

            </Body>
            <Footer>
                <Disclaimer>
                    <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
                </Disclaimer>
                <FooterNavigation>
                    <Timer />
                    <FooterBtnWrapper>
                        <FooterBtn variant={true}>Continuar navegando</FooterBtn>
                        <FooterBtn variant={false}>Logout</FooterBtn>
                    </FooterBtnWrapper>
                </FooterNavigation>
            </Footer>
        </Container>
    )
}