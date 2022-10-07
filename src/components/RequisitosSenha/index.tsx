import { useState, useContext } from 'react';
import { BsCheck, BsX } from 'react-icons/bs'
import { passwordContext } from '../../common/context/Password';
import { PropsPasswordContext } from '../interfaces/Password';
import { Container, Conteudo, Erro, Item, Titulo, Valido } from './RequisitosSenhaElements'

export const RequisitosSenha = () => {
    const [checked, setChecked] = useState(false);
    const { isMinSix, isUpper, isLower, isNumber, isSpecialChar  } = useContext<PropsPasswordContext>(passwordContext);

    return (
        <Container>
            <Titulo>
                A senha deverá conter ao menos:
            </Titulo>
            <Item>
                {isMinSix ?
                    <Valido><BsCheck /></Valido> :
                    <Erro><BsX /></Erro>
                }
                <Conteudo>
                    6 caracteres
                </Conteudo>
            </Item>
            <Item>
                {isUpper ?
                    <Valido><BsCheck /></Valido> :
                    <Erro><BsX /></Erro>
                }
                <Conteudo>
                    uma letra maiúscula
                </Conteudo>
            </Item>
            <Item>
                {isLower ?
                    <Valido><BsCheck /></Valido> :
                    <Erro><BsX /></Erro>
                }
                <Conteudo>
                    uma letra minúscula
                </Conteudo>
            </Item>
            <Item>
                {isNumber ?
                    <Valido><BsCheck /></Valido> :
                    <Erro><BsX /></Erro>
                }
                <Conteudo>
                    um número
                </Conteudo>
            </Item>
            <Item>
                {isSpecialChar ?
                    <Valido><BsCheck /></Valido> :
                    <Erro><BsX /></Erro>
                }
                <Conteudo>
                    um caractere especial
                </Conteudo>
            </Item>
        </Container>
    )
}