import { ActiveLink, Paragraph } from "./LoginMessageElements"
import { useContext } from 'react';
import { PropsUserContext } from "../interfaces/UserInfo";
import { UserInfoContext } from "../../common/context/UserInfo";


export const LoginMessage = () => {
    const { loginPageTitle, handleClick  } = useContext<PropsUserContext>(UserInfoContext);
    return(
        <>
        { loginPageTitle === 'Login' ? <Paragraph>
            Ainda não possui conta?
            <ActiveLink to='/register' onClick={handleClick}>
                &nbsp;
                Cadastre-se
            </ActiveLink>
        </Paragraph> :   <Paragraph>
                Já possui uma conta?
                <ActiveLink to='/' onClick={handleClick}>
                    &nbsp;
                    Entrar
                </ActiveLink>
            </Paragraph>}
        </>
    )
}