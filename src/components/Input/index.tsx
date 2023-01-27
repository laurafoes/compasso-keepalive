import { useContext, useEffect } from 'react'
import { AiOutlineUnlock, AiOutlineUser } from 'react-icons/ai';
import { passwordContext } from '../../common/context/Password';
import { UserInfoContext } from '../../common/context/UserInfo';
import { PropsPasswordContext } from '../interfaces/Password';
import { PropsUserContext } from '../interfaces/UserInfo';
import { Container, ErrorMessage, InputElement, PasswordIcon, SuccessMessage, UserIcon } from './InputElements';

interface InputProps {
    type: string,
    placeholder: string,
    inputName: string,
    className?: string
}

function Input({ type, placeholder, inputName, className }: InputProps) {
    const { 
        userInfo,
        error,
        errorExists, 
        icons,
        logged,
        loginPageTitle, 
        handleChange 
    } = useContext<PropsUserContext>(UserInfoContext);

    const {
        setIsMinSix,
        setIsUpper, 
        setIsLower, 
        setIsNumber, 
        setIsSpecialChar 
    } = useContext<PropsPasswordContext>(passwordContext);

    const userInputField = () => {
        type ObjectKey = keyof typeof userInfo
        const currentField = inputName as ObjectKey
        return userInfo[currentField]
    }

    const showIcon = () => {
        type ObjectKey = keyof typeof icons
        const currentField = inputName as ObjectKey
        return icons[currentField]
    }

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
        <InputElement
            type={type}
            placeholder={placeholder}
            name={inputName}
            className={className}
            onChange={(e) => handleChange(e)}
            errorExists={errorExists}
            user={userInputField()}
        />
        { type === 'text' ?
            <UserIcon icons={showIcon()}>
                <AiOutlineUser />
            </UserIcon> :
            <PasswordIcon icons={showIcon()}>
                <AiOutlineUnlock />
            </PasswordIcon>        
        }
    </Container>
)
}

export default Input
