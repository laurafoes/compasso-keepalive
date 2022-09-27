import axios from 'axios';
import { useState, useEffect } from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { Cidade, ClimaWrapper, Container, Icone, Temperatura } from './ClimaElements';

export const Clima = () => {
    const [ temperatura, setTemperatura ] = useState<number>(0);
    const [ cidade, setCidade ] = useState<string>('');
     
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function (position) {
            let latitude = position.coords.latitude;
            let longidute = position.coords.longitude;

            axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longidute}&units=metric&APPID=e75376c3fdfbe9b424e6194dc179030c`)
                .then(res => res.data)
                .then(res => {
                    const { main, name, id } = res;
                    setCidade(`${name} - SC`);
                    setTemperatura(Math.round(main.temp));
                });
        });
    }, []);

    return(
        <Container>
            <Cidade>{cidade}</Cidade>
            <ClimaWrapper>
                <Icone>
                    <TiWeatherPartlySunny />
                </Icone>
                <Temperatura>
                    {temperatura}
                </Temperatura>
            </ClimaWrapper>
        </Container>
    )
}