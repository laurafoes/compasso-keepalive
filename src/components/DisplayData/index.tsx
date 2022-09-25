import { Container, Data, Hora } from "./DisplayDataElements"
import { useContext, useEffect } from 'react';
import { WidgetDataContext } from "../../common/context/WidgetData";
import { PropsWidgetDataContext, WidgetDataContextProps } from "../interfaces/WidgetData";

export const DisplayData = ({ children }: WidgetDataContextProps) => {
    const { dataHora, setDataHora } = useContext<PropsWidgetDataContext>(WidgetDataContext);

    function obtemDataEHora() {
        const locale = 'pt-br';
        const dataCompleta = new Date().toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const horaCompleta = new Date().toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });

        setDataHora({ data: dataCompleta, hora: horaCompleta })
        console.log( dataCompleta);
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
                <Hora>{ dataHora.hora } </Hora>
                <Data>{ dataHora.data } </Data>
        </Container>
    )
}