import { useContext } from 'react';
import { UserInfoContext } from '../../../common/context/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropsUserContext } from '../../interfaces/UserInfo';
import { Container, ErrorMessage, Input, PasswordIcon } from '../InputElements';

export const InputConfirmPassword = () => {
    const { userInfo, error, errorExists, icons, handleChange } = useContext<PropsUserContext>(UserInfoContext);

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
                <FontAwesomeIcon icon="fa-regular fa-lock-keyhole" />
            </PasswordIcon>
            <ErrorMessage>
                {error}
            </ErrorMessage>
        </Container>
    )
}