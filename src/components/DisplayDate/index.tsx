import { Container, CurrentDate, Hours } from "./DisplayDateElements"
import { useContext, useEffect } from 'react';
import { WidgetDateContext } from "../../common/context/WidgetData";
import { PropsWidgetDateContext } from "../interfaces/WidgetDate";

export const DisplayDate = () => {
    const { dateTime, setDateTime } = useContext<PropsWidgetDateContext>(WidgetDateContext);

    function obtemDataEHora() {
        const locale = 'pt-br';
        const fullDate = new Date().toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const hour = new Date().toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });

        setDateTime({ date: fullDate, time: hour })
    }

    useEffect(() => {
        const timer = setInterval(() => {
            obtemDataEHora();
        }, 60 * 10);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return(
        <Container>
                <Hours>{dateTime.time} </Hours>
                <CurrentDate>{dateTime.date} </CurrentDate>
        </Container>
    )
}