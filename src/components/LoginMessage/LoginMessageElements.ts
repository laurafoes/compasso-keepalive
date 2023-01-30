import { Link } from "react-router-dom"
import styled from "styled-components"
import { linkColor } from "../../assets/styles/variables"

export const Paragraph = styled.p`
    margin-top: 1.5rem;
    text-align: center;
`

export const ActiveLink = styled(Link)`
    color: ${linkColor}
`