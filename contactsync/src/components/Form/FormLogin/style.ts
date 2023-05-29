import styled from "styled-components"

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        font-size: 12px;
    }

    input {
        border-radius: 5px;
        border: 1px solid black;
        width: 100%;
        height: 25px;
    }

    a {
        text-decoration: none;
        color: var(--prussian-blue);
        font-size: 12px;
    }

`

export const ErrorMessage = styled.p`
font-size: 12px;
font-weight: 600;
color: red;
`

