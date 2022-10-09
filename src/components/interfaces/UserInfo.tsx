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
    errorExists: boolean,
    setErrorExists: (newState: boolean) => void,
    error: string,
    setError: (newState: string) => void,
    icons: IIcone,
    setIcons: (newState: IIcone) => void,
    loginPageTitle: string,
    setLoginPageTitle: (newState: string) => void,
    handleClick: (e: React.MouseEvent) => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface UserContextProps {
    children?: ReactNode;
}