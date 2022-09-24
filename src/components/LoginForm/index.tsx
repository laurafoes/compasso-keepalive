import { InputUser } from '../../components/Inputs/InputUser/InputUser';
import { InputPassword } from '../../components/Inputs/InputPassword/InputPassword';
import { Form, Title } from './LoginFormElements';
import { Button } from '../Button';

export const LoginForm = () => {
    return(
        <Form>
            <Title>Login</Title>
            <InputUser />
            <InputPassword />
            <Button />
        </Form>
    )
}