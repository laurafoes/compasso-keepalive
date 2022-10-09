import { useContext } from 'react';
import { BsCheck, BsX } from 'react-icons/bs'
import { passwordContext } from '../../common/context/Password';
import { PropsPasswordContext } from '../interfaces/Password';
import { Container, Content, Invalid, Item, Title, Valid } from './PasswordRequirementsElements.tsx'

export const PasswordRequirements = () => {
    const { isMinSix, isUpper, isLower, isNumber, isSpecialChar  } = useContext<PropsPasswordContext>(passwordContext);

    return (
        <Container>
            <Title>
                A senha deverá conter ao menos:
            </Title>
            <Item>
                {isMinSix ?
                    <Valid><BsCheck /></Valid> :
                    <Invalid><BsX /></Invalid>
                }
                <Content>
                    6 caracteres
                </Content>
            </Item>
            <Item>
                {isUpper ?
                    <Valid><BsCheck /></Valid> :
                    <Invalid><BsX /></Invalid>
                }
                <Content>
                    uma letra maiúscula
                </Content>
            </Item>
            <Item>
                {isLower ?
                    <Valid><BsCheck /></Valid> :
                    <Invalid><BsX /></Invalid>
                }
                <Content>
                    uma letra minúscula
                </Content>
            </Item>
            <Item>
                {isNumber ?
                   <Valid><BsCheck /></Valid> :
                   <Invalid><BsX /></Invalid>
                }
                <Content>
                    um número
                </Content>
            </Item>
            <Item>
                {isSpecialChar ?
                    <Valid><BsCheck /></Valid> :
                    <Invalid><BsX /></Invalid>
                }
                <Content>
                    um caractere especial
                </Content>
            </Item>
        </Container>
    )
}