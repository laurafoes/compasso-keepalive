import { InputUser } from '../../components/Inputs/InputUser/InputUser';
import { InputPassword } from '../../components/Inputs/InputPassword/InputPassword';
import { Form, FormWrapper, ButtonWrapper, Title } from './LoginFormElements';
import { Button } from '../Button';

export const LoginForm = () => {
    return(
        <Form>
            <FormWrapper>
                <Title>Login</Title>
                <InputUser />
                <InputPassword />
            </FormWrapper>
            <ButtonWrapper>
                <Button />
            </ButtonWrapper>
        </Form>
    )
}