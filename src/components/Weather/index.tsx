import axios from 'axios';
import { useState, useEffect } from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { City, Container, Icon, Temperature, WeatherWrapper } from './WeatherElements';

export const Weather = () => {
    const [ temperature, setTemperature ] = useState<number>(0);
    const [ city, setCity ] = useState<string>('Searching...');

    // const api = process.env.REACT_APP_API;
    async function getLocation(lat: number, long: number) {
        try {
            axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=${import.meta.env.VITE_API_KEY}&lat=${lat}&lon=${long}&
            user_ip=remote`)
            .then(res => res.data)
            .then(res => {
                console.log(lat, long)
                const { results } = res;
                const cityAndState = results.city;
                const cityUF = cityAndState.split(',');
                const UF = cityUF[1];
                        setCity(`${results.city_name} - ${UF}`);
                        setTemperature(results.temp);
                    });
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {   
        navigator.geolocation.getCurrentPosition(async function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            getLocation(lat, long);   
        }, async function(error) {
            let lat = -23.5489;
            let long = -46.6388;

            getLocation(lat, long); 
        });
    }, []);

    return(
        <Container>
            <City>{city}</City>
            <WeatherWrapper>
                <Icon>
                    <TiWeatherPartlySunny />
                </Icon>
                <Temperature>
                    {temperature}
                </Temperature>
            </WeatherWrapper>
        </Container>
    )
}