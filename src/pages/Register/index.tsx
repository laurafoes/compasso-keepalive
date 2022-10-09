import { LoginForm } from "../../components/LoginForm";
import { useContext, useEffect } from 'react';
import { PropsUserContext } from "../../components/interfaces/UserInfo";
import { UserInfoContext } from "../../common/context/UserInfo";

export const Register = () => {
    const { setError, setErrorExists } = useContext<PropsUserContext>(UserInfoContext);

    useEffect(() => {
        setError('');
        setErrorExists(false);
    }, [])

    return(
        <>
        <LoginForm />
        </>
    )
}