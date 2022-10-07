import { ReactNode } from 'react';

export interface IUserInfo {
    email: string,
    password: string
}

export interface IIcone {
    email: boolean,
    password: boolean
}

export interface PropsUserContext {
    user: IUserInfo,
    setUser: (newState: IUserInfo) => void,
    existeErro: boolean,
    setExisteErro: (newState: boolean) => void,
    erro: string,
    setErro: (newState: string) => void,
    icone: IIcone,
    setIcone: (newState: IIcone) => void,
    tituloPagInicial: string,
    setTituloPagInicial: (newState: string) => void,
    handleClick: (e: React.MouseEvent) => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface UserContextProps {
    children?: ReactNode;
}