import { TiWeatherPartlySunny } from 'react-icons/ti';
import { Cidade, ClimaWrapper, Container, Icone, Temperatura } from './ClimaElements';

export const Clima = () => {
    return(
        <Container>
            <Cidade>Passo Fundo - RS</Cidade>
            <ClimaWrapper>
                <Icone>
                    <TiWeatherPartlySunny />
                </Icone>
                <Temperatura>
                    22°
                </Temperatura>
            </ClimaWrapper>
        </Container>
    )
}