import { useContext } from 'react';
import { UserInfoContext } from '../../../common/context/UserInfo';
import { PropsUserContext } from '../../interfaces/UserInfo';
import { Container, ErrorMessage, Input, PasswordIcon } from '../InputElements';
import { AiOutlineUnlock } from 'react-icons/ai';

export const InputConfirmPassword = () => {
    const { userInfo,
        error,
        errorExists,
        icons,
        handleChange
    } = useContext<PropsUserContext>(UserInfoContext);

    return(
        <Container>
            <Input
                type="password"
                placeholder="Confirmar senha"
                name="confirmPassword"
                className="ConfirmPassword"
                onChange={((e: any) => handleChange(e))}
                errorExists={errorExists}
                user={userInfo.confirmPassword}
            >
            </Input>
            <PasswordIcon icons={icons.confirmPassword}>
                <AiOutlineUnlock />
            </PasswordIcon>
            <ErrorMessage>
                {error}
            </ErrorMessage>
        </Container>
    )
}