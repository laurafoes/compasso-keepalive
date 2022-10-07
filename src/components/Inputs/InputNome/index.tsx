import { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { UserInfoContext } from '../../../common/context/UserInfo';
import { PropsUserContext } from '../../interfaces/UserInfo';
import { Container, Input, UserIcon } from '../InputElements';

export const InputNome = () => {
    const { user, setUser, existeErro, icone, setIcone } = useContext<PropsUserContext>(UserInfoContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value});
        setIcone({...icone, [e.target.name]: true});
    }

    return(
        <Container>
            <Input
                type="text"
                placeholder="Nome"
                name="nome"
                onChange={((e: any) => handleChange(e))}
                existeErro={existeErro}
            >
            </Input>
            <UserIcon icone={icone.email}>
                <AiOutlineUser />
            </UserIcon>
        </Container>
    )
}