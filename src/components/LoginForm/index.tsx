import { InputUser } from '../../components/Inputs/InputUser/InputUser';
import { InputPassword } from '../../components/Inputs/InputPassword/InputPassword';
import { Form, FormWrapper, ButtonWrapper, Title } from './LoginFormElements';
import { Button } from '../Button';
import { useContext } from 'react';
import { PropsUserContext } from '../interfaces/UserInfo';
import { UserInfoContext } from '../../common/context/UserInfo';
import { InputConfirmPassword } from '../Inputs/InputConfirmPassword';
import { RequisitosSenha } from '../RequisitosSenha';
import { MensagemAcesso } from '../MensagemAcesso';
import { InputNome } from '../Inputs/InputNome';

export const LoginForm = () => {
    const { tituloPagInicial, handleClick } = useContext<PropsUserContext>(UserInfoContext);

    return(
        <Form>
            <FormWrapper>
                <Title>{tituloPagInicial}</Title>
                {tituloPagInicial === 'Cadastro' ? <InputNome /> : ''}
                <InputUser />
                <InputPassword />
                {tituloPagInicial === 'Cadastro' ? <InputConfirmPassword /> : ''}
                {tituloPagInicial === 'Cadastro' ? <RequisitosSenha /> : ''}
            </FormWrapper>
            <ButtonWrapper>
                <Button />
            </ButtonWrapper>
            <MensagemAcesso />
        </Form>
    )
}