import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/FirebaseConfig';
import { Container, Mensagem, Contador, TimerWrapper } from "./TimerElements"

export const Timer = () => {
    const [ counter, setCounter ] = useState(60);
    const navigateTo = useNavigate();

    const handleTimer = () => {
        auth.signOut();
        navigateTo('/');
    }

    useEffect(() => {
        counter > 1 && setTimeout(() => setCounter( counter - 1 ), 1000);
        counter === 1 ? setTimeout(() => handleTimer(), 1000) : '';
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