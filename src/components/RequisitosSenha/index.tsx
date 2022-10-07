import { useState } from 'react';
import { BsCheck, BsX } from 'react-icons/bs'
import { Container, Conteudo, Erro, Item, Titulo, Valido } from './RequisitosSenhaElements'

export const RequisitosSenha = () => {
    const [checked, setChecked] = useState(false);
    return (
        <Container>
            <Titulo>
                A senha deverá conter ao menos:
            </Titulo>
            <Item>
                {checked ?
                    <Valido><BsCheck /></Valido> :
                    <Erro><BsX /></Erro>
                }
                <Conteudo>
                    6 caracteres
                </Conteudo>
            </Item>
            <Item>
                {checked ?
                    <Valido><BsCheck /></Valido> :
                    <Erro><BsX /></Erro>
                }
                <Conteudo>
                    uma letra maiúscula
                </Conteudo>
            </Item>
            <Item>
                {checked ?
                    <Valido><BsCheck /></Valido> :
                    <Erro><BsX /></Erro>
                }
                <Conteudo>
                    uma letra minúscula
                </Conteudo>
            </Item>
            <Item>
                {checked ?
                    <Valido><BsCheck /></Valido> :
                    <Erro><BsX /></Erro>
                }
                <Conteudo>
                    um número
                </Conteudo>
            </Item>
            <Item>
                {checked ?
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