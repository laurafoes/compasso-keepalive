import { createContext, useState } from 'react';
import { PropsPasswordContext } from '../../components/interfaces/Password';
import { UserContextProps } from '../../components/interfaces/UserInfo';

const initialValue = {
    isMinSix: false,
    setIsMinSix: () => {},
    isUpper: false,
    setIsUpper: () => {},
    isLower: false,
    setIsLower: () => {},
    isNumber: false,
    setIsNumber: () => {},
    isSpecialChar: false,
    setIsSpecialChar: () => {},
    passwordsMatch: false,
    setPasswordsMatch: () => {}
}

export const passwordContext = createContext<PropsPasswordContext>(initialValue);
passwordContext.displayName = 'Password';

export const PasswordProvider = ({ children }: UserContextProps) => {
    const [ isMinSix, setIsMinSix ] = useState(initialValue.isMinSix);
    const [ isUpper, setIsUpper ] = useState(initialValue.isUpper);
    const [ isLower, setIsLower ] = useState(initialValue.isLower);
    const [ isNumber, setIsNumber ] = useState(initialValue.isNumber);
    const [ isSpecialChar, setIsSpecialChar ] = useState(initialValue.isSpecialChar);
    const [ passwordsMatch, setPasswordsMatch ] = useState(initialValue.passwordsMatch);

    return (
        <passwordContext.Provider value={{ isMinSix, setIsMinSix, isUpper, setIsUpper, isLower, setIsLower, isNumber, setIsNumber, isSpecialChar, setIsSpecialChar, passwordsMatch, setPasswordsMatch }}>
            {children}
        </passwordContext.Provider>
    )
}