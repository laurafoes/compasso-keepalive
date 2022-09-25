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

    return (
        <WidgetDataContext.Provider value={{ dataHora, setDataHora }}>
            {children}
        </WidgetDataContext.Provider>
    )
}