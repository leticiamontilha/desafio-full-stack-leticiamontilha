import styled from "styled-components"

export const HeaderStyle = styled.main`
    height: 80px;
    width: 100%;
    background-color: var(--vanilla);

    .containerHeader{
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
        padding: 20px;
        margin-left: 25px;
        margin-right: 25px;
    }

    h2 {
        font-size: 20px;
        color: var(--prussian-blue);
    }

    p {
        font-size: 12px;
        color: var(--prussian-blue);
        font-weight: bold;
    }


    button {
        width: 50px;
        font-size: 10px;
        border: none;
        background: var(--fire-engine-red);
        color: var(--vanilla);
    }
`

