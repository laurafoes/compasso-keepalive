import { createContext, useState } from 'react';
import { PropsUserContext, UserContextProps } from '../../components/interfaces/UserInfo';

const initialValue = {
    userInfo: {
        name: '',
        email: '',
        password: '',
        registerPassword: '',
        confirmPassword: ''
    }, setUserInfo: () => {},
    errorExists: false,
    setErrorExists: () => {},
    error: '',
    setError: () => {},
    icons: {
        name: false,
        email: false,
        password: false,
        registerPassword: false,
        confirmPassword: false
    },
    setIcons: () => {},
    loginPageTitle: 'Login',
    setLoginPageTitle: () => {},
    getCurrentLocation: () => {},
    handleChange: () => {}
}

export const UserInfoContext = createContext<PropsUserContext>(initialValue);
UserInfoContext.displayName = 'User Info';

export const UserInfoProvider = ({ children }: UserContextProps) => {
    const [ userInfo , setUserInfo ] = useState(initialValue.userInfo);
    const [ errorExists, setErrorExists ] = useState(false);
    const [ error, setError ] = useState(initialValue.error);
    const [ icons, setIcons ] = useState(initialValue.icons);
    const [ loginPageTitle, setLoginPageTitle ] = useState(initialValue.loginPageTitle);

    const getCurrentLocation = () => {
        if(location.pathname === '/') {
            setLoginPageTitle('Login')
        } else {
            setLoginPageTitle('Cadastro')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
        setIcons({...icons, [e.target.name]: true});
    }

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo, errorExists, setErrorExists, error, setError, icons, setIcons, loginPageTitle, setLoginPageTitle, getCurrentLocation, handleChange }}>
            {children}
        </UserInfoContext.Provider>
    )
}