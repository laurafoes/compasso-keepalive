import { Container, Mensagem, Contador, TimerWrapper } from "./TimerElements"

export const Timer = () => {
    return(
        <Container>
            <Mensagem>Application refresh in</Mensagem>
            <TimerWrapper>
                <Contador>
                    600
                </Contador>
                <p>seconds</p>
            </TimerWrapper>
        </Container>
    )
}