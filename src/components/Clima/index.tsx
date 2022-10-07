import axios from 'axios';
import { useState, useEffect } from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { Cidade, ClimaWrapper, Container, Icone, Temperatura } from './ClimaElements';

export const Clima = () => {
    const [ temperatura, setTemperatura ] = useState<number>(0);
    const [ cidade, setCidade ] = useState<string>('Procurando...');

    // const api = process.env.REACT_APP_API;
    async function getLocation(latitude: number, longitude: number) {
        try {
            axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=
            ${import.meta.env.VITE_API_KEY}&lat=${latitude}&lon=${longitude}&
            user_ip=remote`)
            .then(res => res.data)
            .then(res => {
                console.log(latitude, longitude)
                const { results } = res;
                const cidadeEstado = results.city;
                const cidadeUF = cidadeEstado.split(',');
                const UF = cidadeUF[1];
                        setCidade(`${results.city_name} - ${UF}`);
                        setTemperatura(results.temp);
                    });
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {   
        navigator.geolocation.getCurrentPosition(async function (position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            getLocation(latitude, longitude);   
        }, async function(error) {
            let latitude = -23.5489;
            let longitude = -46.6388;

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