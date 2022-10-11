import { ReactNode } from 'react';

export interface PropsPasswordContext {
    isMinSix: boolean,
    setIsMinSix: (newState: boolean) => void,
    isUpper: boolean,
    setIsUpper: (newState: boolean) => void,
    isLower: boolean,
    setIsLower: (newState: boolean) => void,
    isNumber: boolean,
    setIsNumber: (newState: boolean) => void,
    isSpecialChar: boolean,
    setIsSpecialChar: (newState: boolean) => void,
    passwordsMatch: boolean,
    setPasswordsMatch: (newState: boolean) => void
}

export interface PasswordContextProps {
    children?: ReactNode;
}