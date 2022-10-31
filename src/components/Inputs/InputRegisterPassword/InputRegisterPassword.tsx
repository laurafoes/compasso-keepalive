import { useEffect, useContext } from 'react';
import { UserInfoContext } from '../../../common/context/UserInfo';
import { PropsUserContext } from '../../interfaces/UserInfo';
import { Container, Input, PasswordIcon } from '../InputElements';
import { passwordContext } from '../../../common/context/Password';
import { PropsPasswordContext } from '../../interfaces/Password';
import { AiOutlineUnlock } from 'react-icons/ai';

export const InputRegisterPassword = () => {
    const { 
            userInfo,
            errorExists, 
            icons, 
            handleChange 
        } = useContext<PropsUserContext>(UserInfoContext);
    const {
            setIsMinSix,
            setIsUpper, 
            setIsLower, 
            setIsNumber, 
            setIsSpecialChar 
        } = useContext<PropsPasswordContext>(passwordContext);

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
        validate(userInfo.registerPassword)
    }, [userInfo.registerPassword])

    return(
        <Container>
            <Input
                type="password"
                placeholder="Senha"
                name="registerPassword"
                className="RegisterPassWordInput"
                onChange={handleChange}
                errorExists={errorExists}
                user={userInfo.registerPassword}
            >
            </Input>
            <PasswordIcon icons={icons.registerPassword}>
                <AiOutlineUnlock />
            </PasswordIcon>
        </Container>
    )
}