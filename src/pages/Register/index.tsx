import { LoginForm } from "../../components/LoginForm";
import { useContext, useEffect } from 'react';
import { PropsUserContext } from "../../components/interfaces/UserInfo";
import { UserInfoContext } from "../../common/context/UserInfo";
import { MensagemAcesso } from "../../components/MensagemAcesso";

export const Register = () => {
    const { setErro, setExisteErro } = useContext<PropsUserContext>(UserInfoContext);

    useEffect(() => {
        setErro('');
        setExisteErro(false);
    }, [])

    return(
        <>
        <LoginForm />
        </>
    )
}