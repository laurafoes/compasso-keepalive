import { ReactNode } from 'react';

export interface IWidgetDate {
    date: string,
    time: string
}

export interface PropsWidgetDateContext {
    dateTime: IWidgetDate,
    setDateTime: (newState: IWidgetDate) => void
}

export interface WidgetDateContextProps {
    children?: ReactNode;
}