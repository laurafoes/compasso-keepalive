import { createContext, useState } from 'react';
import { PropsUserContext, UserContextProps } from '../../components/interfaces/UserInfo';

const valorInicial = {
    user: {
        email: '',
        password: ''
    }, setUser: () => {},
    existeErro: false,
    setExisteErro: () => {},
    erro: '',
    setErro: () => {},
    icone: {
        email: false,
        password: false,
    },
    setIcone: () => {},
    tituloPagInicial: 'Login',
    setTituloPagInicial: () => {},
    handleClick: () => {}
}

export const UserInfoContext = createContext<PropsUserContext>(valorInicial);
UserInfoContext.displayName = 'User Info';

export const UserInfoProvider = ({ children }: UserContextProps) => {
    const [ user , setUser ] = useState(valorInicial.user);
    const [ existeErro, setExisteErro ] = useState(false);
    const [ erro, setErro ] = useState(valorInicial.erro);
    const [ icone, setIcone ] = useState(valorInicial.icone);
    const [ tituloPagInicial, setTituloPagInicial ] = useState(valorInicial.tituloPagInicial);

    const handleClick = (e: React.MouseEvent) => {
        if(tituloPagInicial === 'Login') {
            setTituloPagInicial('Cadastro');
        } else {
            setTituloPagInicial('Login')
        }
    }

    return (
        <UserInfoContext.Provider value={{ user, setUser, existeErro, setExisteErro, erro, setErro, icone, setIcone, tituloPagInicial, setTituloPagInicial, handleClick }}>
            {children}
        </UserInfoContext.Provider>
    )
}