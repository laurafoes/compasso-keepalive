import { useState, useEffect } from 'react';
import { Container, Mensagem, Contador, TimerWrapper } from "./TimerElements"

export const Timer = () => {
    const [ counter, setCounter ] = useState(60);

    useEffect(() => {
        counter > 1 && setTimeout(() => setCounter( counter - 1 ), 1000);
    }, [counter]);

    return(
        <Container>
            <Mensagem>Application refresh in</Mensagem>
            <TimerWrapper>
                <Contador>
                    {counter}
                </Contador>
                <p>seconds</p>
            </TimerWrapper>
        </Container>
    )
}