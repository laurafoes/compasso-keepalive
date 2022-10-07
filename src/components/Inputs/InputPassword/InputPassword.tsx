import { useEffect, useContext } from 'react';
import { UserInfoContext } from '../../../common/context/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropsUserContext } from '../../interfaces/UserInfo';
import { Container, Input, MensagemErro, PasswordIcon } from '../InputElements';
import { passwordContext } from '../../../common/context/Password';
import { PropsPasswordContext } from '../../interfaces/Password';

export const InputPassword = () => {
    const { user, setUser, erro, existeErro, icone, setIcone, tituloPagInicial } = useContext<PropsUserContext>(UserInfoContext);

    const { setIsMinSix, setIsUpper, setIsLower, setIsNumber, setIsSpecialChar  } = useContext<PropsPasswordContext>(passwordContext);
    
    const validar = ( userPassword: string ) => {
        const checkLength = /^.{6,}$/;
        const checkUpper = /^.*[A-Z].*$/;
        const checkLower = /^.*[a-z].*$/;
        const checkNumber = /^.*[0-9].*$/;
        const checkSpecialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
        if(checkLength.test(userPassword)) {
            setIsMinSix(true)
        } else {
            setIsMinSix(false)
        }

        if(checkUpper.test(userPassword)) {
            setIsUpper(true)
        } else {
            setIsUpper(false)
        }

        if(checkLower.test(userPassword)) {
            setIsLower(true)
        } else {
            setIsLower(false)
        }

        if(checkNumber.test(userPassword)) {
            setIsNumber(true)
        } else {
            setIsNumber(false)
        }

         if(checkSpecialChar.test(userPassword)) {
            setIsSpecialChar(true)
        } else {
            setIsSpecialChar(false)
        }
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
        setIcone({...icone, [e.target.name]: true});
    }

    useEffect(() => {
        validar(user.password)
    }, [user.password])

    return(
        <Container>
            <Input
                type="password"
                placeholder="Senha"
                name="password"
                className="password_size"
                onChange={((e: any) => handleChange(e))}
                existeErro={existeErro}
                user={user.password}
            >
            </Input>
            <PasswordIcon icone={icone.password}>
                <FontAwesomeIcon icon="fa-regular fa-lock-keyhole" />
            </PasswordIcon>
            <MensagemErro>
                {tituloPagInicial === 'Login' ? erro : ''}
            </MensagemErro>
        </Container>
    )
}