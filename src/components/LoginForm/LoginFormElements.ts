import styled from "styled-components"

export const Form = styled.div`
    width: 70%;
    max-width: 379px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
        @media screen and (max-width: 915px) and (orientation: landscape) {
        width: 70%;
        height: auto;
    }
`
export const FormWrapper = styled.div`
    width: 100%;
    max-width: 379px;
    margin: 0 auto;
`

export const Title = styled.h4 `
    margin-top: 0;
    margin-bottom: 3vh;
    @media screen and (max-width: 915px) and (orientation: landscape) {
        font-size: 22px;
    }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    max-width: 379px;
    margin: 0 auto;
`