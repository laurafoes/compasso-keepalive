import { ReactNode } from 'react';

export interface IUserInfo {
    name: string
    email: string,
    password: string,
    registerPassword: string,
    confirmPassword: string,
}

export interface IIcone {
    name: boolean,
    email: boolean,
    password: boolean,
    registerPassword: boolean,
    confirmPassword: boolean
}

export interface PropsUserContext {
    userInfo: IUserInfo,
    setUserInfo: (newState: IUserInfo) => void,
    errorExists: boolean,
    setErrorExists: (newState: boolean) => void,
    error: string,
    setError: (newState: string) => void,
    icons: IIcone,
    setIcons: (newState: IIcone) => void,
    registered: boolean,
    setRegistered: (newState: boolean) => void,
    loginPageTitle: string,
    setLoginPageTitle: (newState: string) => void,
    getCurrentLocation: () => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export interface UserContextProps {
    children?: ReactNode;
}