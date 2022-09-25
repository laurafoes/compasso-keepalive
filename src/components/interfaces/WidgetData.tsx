import { ReactNode } from 'react';

export interface IWidgetData {
    hora: string,
    data: string
}

export interface PropsWidgetDataContext {
    dataHora: IWidgetData,
    setDataHora: (newState: IWidgetData) => void
}

export interface WidgetDataContextProps {
    children?: ReactNode;
}