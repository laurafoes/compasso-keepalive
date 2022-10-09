import { useContext } from 'react';
import { UserInfoContext } from '../../../common/context/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropsUserContext } from '../../interfaces/UserInfo';
import { Container, ErrorMessage, Input, PasswordIcon } from '../InputElements';

export const InputConfirmPassword = () => {
    const { user, error, errorExists, icons, handleChange } = useContext<PropsUserContext>(UserInfoContext);


    return(
        <Container>
            <Input
                type="password"
                placeholder="Confirmar senha"
                name="confirmpassword"
                className="password_size"
                onChange={((e: any) => handleChange(e))}
                errorExists={errorExists}
                user={user.password}
            >
            </Input>
            <PasswordIcon icons={icons.password}>
                <FontAwesomeIcon icon="fa-regular fa-lock-keyhole" />
            </PasswordIcon>
            <ErrorMessage>
                {error}
            </ErrorMessage>
        </Container>
    )
}