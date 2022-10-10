import { ActiveLink, Paragraph } from "./LoginMessageElements"
import { useContext, useEffect } from 'react';
import { PropsUserContext } from "../interfaces/UserInfo";
import { UserInfoContext } from "../../common/context/UserInfo";
import { useLocation } from "react-router-dom";


export const LoginMessage = () => {
    const { loginPageTitle, getCurrentLocation } = useContext<PropsUserContext>(UserInfoContext);
    let location = useLocation();

    useEffect(() => {
        getCurrentLocation();
        console.log(location)
    }, [location])
    return (
        <>
            {loginPageTitle === 'Login' ?
                <Paragraph>
                    Ainda não possui conta?
                    <ActiveLink to='/register'>
                        &nbsp;
                        Cadastre-se
                    </ActiveLink>
                </Paragraph> : <Paragraph>
                    Já possui uma conta?
                    <ActiveLink to='/'>
                        &nbsp;
                        Entrar
                    </ActiveLink>
                </Paragraph>
            }
        </>
    )
}