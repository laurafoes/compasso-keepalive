import { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { UserInfoContext } from '../../../common/context/UserInfo';
import { PropsUserContext } from '../../interfaces/UserInfo';
import { Container, Input, UserIcon } from '../InputElements';

export const InputUser = () => {
    const { errorExists, icons, handleChange } = useContext<PropsUserContext>(UserInfoContext);

    return(
        <Container>
            <Input
                type="text"
                placeholder="E-mail"
                name="email"
                onChange={((e: any) => handleChange(e))}
                errorExists={errorExists}
            >
            </Input>
            <UserIcon icons={icons.email}>
                <AiOutlineUser />
            </UserIcon>
        </Container>
    )
}