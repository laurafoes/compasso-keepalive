import { AiOutlineUser } from 'react-icons/ai';
import { Container, Input, UserIcon } from '../InputElements';

export const InputUser = () => {
    return(
        <Container>
            <Input type="text" placeholder="Usuário">
            </Input>
            <UserIcon>
                <AiOutlineUser />
            </UserIcon>
        </Container>
    )
}