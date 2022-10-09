import { createContext, useState } from 'react';
import { PropsWidgetDateContext, WidgetDateContextProps } from '../../components/interfaces/WidgetDate';

const initialValue = {
    dateTime: {
        date: '',
        time: ''
    }, setDateTime: () => {},
}

export const WidgetDateContext = createContext<PropsWidgetDateContext>(initialValue);
WidgetDateContext.displayName = 'Date/Time Widget';

export const WidgetDataProvider = ({ children }: WidgetDateContextProps) => {
    const [ dateTime, setDateTime ] = useState(initialValue.dateTime);

    return (
        <WidgetDateContext.Provider value={{ dateTime, setDateTime }}>
            {children}
        </WidgetDateContext.Provider>
    )
}