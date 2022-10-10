import { useEffect, useContext } from 'react';
import { UserInfoContext } from '../../../common/context/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropsUserContext } from '../../interfaces/UserInfo';
import { Container, ErrorMessage, Input, PasswordIcon } from '../InputElements';
import { passwordContext } from '../../../common/context/Password';
import { PropsPasswordContext } from '../../interfaces/Password';

export const InputPassword = () => {
    const { userInfo, setUserInfo, error, errorExists, icons, loginPageTitle, handleChange } = useContext<PropsUserContext>(UserInfoContext);
    const { setIsMinSix, setIsUpper, setIsLower, setIsNumber, setIsSpecialChar  } = useContext<PropsPasswordContext>(passwordContext);

    const validate = ( userPassword: string ) => {
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

    useEffect(() => {
        validate(userInfo.password)
        console.log(userInfo.password)
    }, [userInfo.password])

    return(
        <Container>
            <Input
                type="password"
                placeholder="Senha"
                name="password"
                className="password_size"
                onChange={handleChange}
                errorExists={errorExists}
                user={userInfo.password}
            >
            </Input>
            <PasswordIcon icons={icons.password}>
                <FontAwesomeIcon icon="fa-regular fa-lock-keyhole" />
            </PasswordIcon>
            <ErrorMessage>
                {loginPageTitle === 'Login' ? error : ''}
            </ErrorMessage>
        </Container>
    )
}