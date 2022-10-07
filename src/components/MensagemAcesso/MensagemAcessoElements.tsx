import { Link } from "react-router-dom"
import styled from "styled-components"
import { corErro } from "../../assets/styles/variables"

export const Paragrafo = styled.p`
    margin-top: 1rem;
    text-align: center;
`

export const LinkAtivo = styled(Link)`
    color: ${corErro}
`