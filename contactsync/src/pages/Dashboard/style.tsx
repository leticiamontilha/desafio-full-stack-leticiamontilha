import styled from "styled-components"


export const SectionStyled = styled.section`
    width: 100vw;
    /* max-width: 300px; */
    height: 100vh;
    margin-top: 25px;

    display: flex;
    align-items: center;
    flex-direction: column;

    .containerContacts{
        width: 80vw;
        height: 80vh;
        background-color: var(--vanilla);
        border-radius: 20px;
    }

    .headerContacts {
        border-bottom: 1px solid var(--orange-wheel);
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .headerContacts > button {
        width: 100px;
        font-size: 10px;
        border: none;
        background: var(--orange-wheel);
        color: var(--vanilla);
    }
    

    h2 {
        font-size: 18px;
        padding: 25px;
        color: var(--prussian-blue);
    }

`

export const ListStyled = styled.ul`
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
        overflow-x: auto;
        padding: 10px;
`   

export const CardContactStyled = styled.li`
    display: flex;
    flex-direction: column;
    background-color: var(--orange-wheel);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 10px;
    gap: 10px;
    color: var(--prussian-blue);
    width: 80vw;
    max-width: 180px;
    height: 130px;

    p {
        font-weight: bold;
        font-size: 12px;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }

    button {
        border: none;
    }

    .edit{
        background: var(--xanthous);
        color: var(--prussian-blue);
        font-weight: bold;
    }

    .trash{
        background-color: var(--fire-engine-red);
        color: var(--vanilla);
    }
`
