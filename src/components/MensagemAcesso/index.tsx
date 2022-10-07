import { LinkAtivo, Paragrafo } from "./MensagemAcessoElements"
import { useContext } from 'react';
import { PropsUserContext } from "../interfaces/UserInfo";
import { UserInfoContext } from "../../common/context/UserInfo";


export const MensagemAcesso = () => {
    const { tituloPagInicial, handleClick  } = useContext<PropsUserContext>(UserInfoContext);
    return(
        <>
        { tituloPagInicial === 'Login' ? <Paragrafo>
            Ainda não possui conta?
            <LinkAtivo to='/register' onClick={handleClick}>
                &nbsp;
                Cadastre-se
            </LinkAtivo>
        </Paragrafo> :   <Paragrafo>
                Já possui uma conta?
                <LinkAtivo to='/' onClick={handleClick}>
                    &nbsp;
                    Entrar
                </LinkAtivo>
            </Paragrafo>}
        </>
    )
}