import styled from "styled-components"

export const FormcontactStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--prussian-blue);

    h2{
        text-align: center;
    }

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

    span {
        display: flex;
        justify-content: center;
        margin-top: 25px;
    }

    button {
        width: 80%;
        border: 1px solid var(--prussian-blue);
        background-color: var(--vanilla);
    }

`

export const ErrorMessage = styled.p`
font-size: 12px;
font-weight: 600;
color: red;
`

export const FormDelete = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    color: var(--prussian-blue);
    padding: 25px;

    p {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }

    button {
        width: 150px;
        border: none;
        background-color: var(--fire-engine-red);
        color: var(--vanilla);
    }

`