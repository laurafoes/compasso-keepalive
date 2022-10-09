import { createContext, useState } from 'react';
import { PropsUserContext, UserContextProps } from '../../components/interfaces/UserInfo';

const initialValue = {
    user: {
        email: '',
        password: ''
    }, setUser: () => {},
    errorExists: false,
    setErrorExists: () => {},
    error: '',
    setError: () => {},
    icons: {
        email: false,
        password: false,
    },
    setIcons: () => {},
    loginPageTitle: 'Login',
    setLoginPageTitle: () => {},
    handleClick: () => {},
    handleChange: () => {}
}

export const UserInfoContext = createContext<PropsUserContext>(initialValue);
UserInfoContext.displayName = 'User Info';

export const UserInfoProvider = ({ children }: UserContextProps) => {
    const [ user , setUser ] = useState(initialValue.user);
    const [ errorExists, setErrorExists ] = useState(false);
    const [ error, setError ] = useState(initialValue.error);
    const [ icons, setIcons ] = useState(initialValue.icons);
    const [ loginPageTitle, setLoginPageTitle ] = useState(initialValue.loginPageTitle);
    const handleClick = (e: React.MouseEvent) => {
        if(loginPageTitle === 'Login') {
            setLoginPageTitle('Cadastro');
        } else {
            setLoginPageTitle('Login')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
        setIcons({...icons, [e.target.name]: true});
    }

    return (
        <UserInfoContext.Provider value={{ user, setUser, errorExists, setErrorExists, error, setError, icons, setIcons, loginPageTitle, setLoginPageTitle, handleClick, handleChange }}>
            {children}
        </UserInfoContext.Provider>
    )
}