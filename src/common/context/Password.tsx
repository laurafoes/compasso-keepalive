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
    setIsSpecialChar: () => {}
}

export const passwordContext = createContext<PropsPasswordContext>(initialValue);
passwordContext.displayName = 'Password';

export const PasswordProvider = ({ children }: UserContextProps) => {
    const [ isMinSix, setIsMinSix ] = useState(false);
    const [ isUpper, setIsUpper ] = useState(false);
    const [ isLower, setIsLower ] = useState(false);
    const [ isNumber, setIsNumber ] = useState(false);
    const [ isSpecialChar, setIsSpecialChar ] = useState(false);

    return (
        <passwordContext.Provider value={{ isMinSix, setIsMinSix, isUpper, setIsUpper, isLower, setIsLower, isNumber, setIsNumber, isSpecialChar, setIsSpecialChar }}>
            {children}
        </passwordContext.Provider>
    )
}