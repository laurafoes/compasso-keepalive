import { Link } from "react-router-dom"
import styled from "styled-components"
import { corErro } from "../../assets/styles/variables"

export const Paragraph = styled.p`
    text-align: center;
`

export const ActiveLink = styled(Link)`
    color: ${corErro}
`