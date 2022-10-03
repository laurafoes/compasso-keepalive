import axios from 'axios';
import { useState, useEffect } from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { Cidade, ClimaWrapper, Container, Icone, Temperatura } from './ClimaElements';

export const Clima = () => {
    const [ temperatura, setTemperatura ] = useState<number>(0);
    const [ cidade, setCidade ] = useState<string>('Procurando...');

    // const api = process.env.REACT_APP_API;
    
    function getLocation(latitude: number, longitude: number) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=e75376c3fdfbe9b424e6194dc179030c`)
                .then(res => res.data)
                .then(res => {
                    const { main, name } = res;
                    if(name == "Brasília"){
                        setCidade(`${name} - DF`);
                    } else {
                        setCidade(`${name} - SC`);

                    }
                    setTemperatura(Math.round(main.temp));
                });
    }

    useEffect(() => {   
        navigator.geolocation.getCurrentPosition(async function (position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            getLocation(latitude, longitude);   
        }, async function(error) {
            let latitude =  -15.7801;
            let longitude = -47.9292;

            getLocation(latitude, longitude); 
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