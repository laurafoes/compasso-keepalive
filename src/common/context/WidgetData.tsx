import { createContext, useState, useEffect } from 'react';
import { PropsWidgetDataContext, WidgetDataContextProps } from '../../components/interfaces/WidgetData';

const valorInicial = {
    dataHora: {
        data: '',
        hora: ''
    }, setDataHora: () => {},
}

export const WidgetDataContext = createContext<PropsWidgetDataContext>(valorInicial);
WidgetDataContext.displayName = 'Widget de Data / Hora';

export const WidgetDataProvider = ({ children }: WidgetDataContextProps) => {
    const [dataHora, setDataHora] = useState(valorInicial.dataHora);

    // const obtemDataEHora => () {
    // const data = new Date();
    // const diasDaSemana = new Array ('domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado');

    // const dia = data.getDate();
    // const diaDaSemana = diasDaSemana[data.getDay()];
    // const mes = data.getMonth();
    // const ano = data.getFullYear();
    // const hora = data.getHours();
    // const minuto = data.getMinutes();

    // const string_hora = `${hora}:${minuto}`;
    // const string_data = `${diaDaSemana}, ${dia} de ${mes} de ${ano}`

    // return string_hora string_data



    return (
        <WidgetDataContext.Provider value={{ dataHora, setDataHora }}>
            {children}
        </WidgetDataContext.Provider>
    )
}