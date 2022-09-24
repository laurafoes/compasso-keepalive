import { TiLockClosedOutline } from 'react-icons/ti';
import { Container, Input, PasswordIcon } from '../InputElements';

export const InputPassword = () => {
    return(
        <Container>
            <Input type="text" placeholder="Senha">
            </Input>
            <PasswordIcon>
                <TiLockClosedOutline />
            </PasswordIcon>
        </Container>
    )
}